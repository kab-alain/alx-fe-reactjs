import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Profile Page</h1>

      {/* Navigation for nested routes */}
      <nav className="space-x-4 mb-4">
        <Link to="details" className="text-blue-500 hover:underline">Details</Link>
        <Link to="settings" className="text-blue-500 hover:underline">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="" element={<h2>Select a tab to view</h2>} />
      </Routes>
    </div>
  );
};

export default Profile;
