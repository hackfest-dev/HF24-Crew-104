import React, { useState } from "react";
import NavbarCustomer from "./NavbarCustomer";
import Footer from "../footer/Footer";
import "./CustomerProfile.css";
const CustomerProfile = () => {
  const footerBackgroundColor = "#1c4c1e";

  const [profileData, setProfileData] = useState({});

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Mock backend update operation
    console.log("Profile updated successfully");
    setEditMode(false);
  };

  return (
    <div className="customer-profile-container">
      <NavbarCustomer className="cp-navbar" />
      <div className="cp-profile-content">
        <h1 className="cp-welcome-header">Welcome, {profileData.username}!</h1>
        <div className="cp-profile-info">
          <div className="cp-edit-button">
            <button onClick={handleEditClick}>Edit</button>
          </div>
          <form className="cp-edit-form" onSubmit={handleSubmit}>
            <div className="cp-main-details">
              <div className="cp-item">
                <div className="cp-profile-field">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={profileData.full_name}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={profileData.location}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={profileData.zipcode}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={profileData.country}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="cp-item">
                <div className="cp-profile-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    disabled
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={profileData.city}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={profileData.state}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={profileData.state}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-profile-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    disabled
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="cp-save-button">
              {editMode && <button type="submit">Save</button>}
            </div>
          </form>
        </div>
      </div>
      <Footer backgroundColor={footerBackgroundColor} />
    </div>
  );
};

export default CustomerProfile;
