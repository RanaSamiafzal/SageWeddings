import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Check if user is authenticated by fetching admin endpoint
    fetch("/api/admin", { credentials: "include" })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
          fetchInquiries();
        } else {
          navigate("/login");
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  const fetchInquiries = () => {
    fetch("/api/inquiries", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInquiries(data.inquiries);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading inquiries...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Wedding Date</th>
              <th className="border border-gray-300 p-2">Venue</th>
              <th className="border border-gray-300 p-2">Package Interest</th>
              <th className="border border-gray-300 p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry: any) => (
              <tr key={inquiry.id}>
                <td className="border border-gray-300 p-2">{inquiry.firstName} {inquiry.lastName}</td>
                <td className="border border-gray-300 p-2">{inquiry.email}</td>
                <td className="border border-gray-300 p-2">{inquiry.phone}</td>
                <td className="border border-gray-300 p-2">{inquiry.weddingDate}</td>
                <td className="border border-gray-300 p-2">{inquiry.venue}</td>
                <td className="border border-gray-300 p-2">{inquiry.packageInterest}</td>
                <td className="border border-gray-300 p-2">{inquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
