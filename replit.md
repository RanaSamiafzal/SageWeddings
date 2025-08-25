# Overview

This is a full-stack wedding videography and photography business website for "The Wedding Poets". The application features a modern, elegant single-page design with sections for portfolio, services, testimonials, packages, and contact inquiries. Built with React on the frontend and Express.js on the backend, it uses PostgreSQL for data persistence and includes a comprehensive UI component system based on shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for wedding industry branding (sage green, cream, champagne color palette)
- **Animations**: Framer Motion for smooth scroll animations and interactive elements

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful API with endpoints for inquiry management
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Development**: Hot module replacement with Vite integration for development workflow

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with code-first schema definition
- **Database Schema**: 
  - `inquiries` table for contact form submissions with fields for wedding details
  - `users` table for potential future authentication needs
- **Migrations**: Automated schema migrations using Drizzle Kit

## Authentication and Authorization
- **Current State**: No authentication implemented (public-facing website)
- **Future Ready**: User schema exists for potential admin dashboard or client portal features

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: Uses `@neondatabase/serverless` for optimized serverless connections

## UI and Design
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom color scheme
- **Google Fonts**: Playfair Display (serif), Montserrat (sans-serif), and Fira Code (monospace)
- **Unsplash**: External image hosting for portfolio and hero imagery

## Development Tools
- **Vite**: Fast build tool and development server
- **Replit Integration**: Custom plugins for development environment
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Form and Interaction
- **React Hook Form**: Form state management with validation
- **TanStack Query**: Data fetching and caching for API interactions
- **Framer Motion**: Animation library for enhanced user experience

The architecture prioritizes performance, accessibility, and maintainability while providing a solid foundation for potential future features like user authentication, admin dashboards, or client portals.