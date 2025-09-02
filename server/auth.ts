
import express, { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { insertUserSchema } from "../shared/schema";
import bcryptjs from "bcryptjs";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import { storage } from "./storage";

const router = express.Router();

// Passport local strategy for authentication
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      const isValid = await bcryptjs.compare(password, user.password);
      if (!isValid) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await storage.getUser(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Register new user route
router.post("/register", async (req: Request, res: Response) => {
  try {
    const parsed = insertUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const { username, password } = parsed.data;
    const hashedPassword = await bcryptjs.hash(password, 10);

    await storage.createUser({ username, password: hashedPassword });

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// Login route
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  })
);

// Logout route
router.post("/logout", (req: Request, res: Response) => {
  req.logout(() => {
    res.json({ success: true });
  });
});

// Middleware to protect admin routes
export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}

// Example protected admin route
router.get("/admin", ensureAuthenticated, (req: Request, res: Response) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

export function setupAuth(app: express.Application) {
  app.use(router);
}

export { router as authRouter };
