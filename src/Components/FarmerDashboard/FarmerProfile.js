import NavbarFarmer from "./NavbarFarmer";
import Footer from "../footer/Footer";
import "./FarmerProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const FarmerProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  let response;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // backend get api
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading profile data...</div>;
  }

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // backeend post api

      if (response.status === 200) {
        console.log("Profile updated successfully");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }

    setEditMode(false);
  };

  return (
    <div>
      <NavbarFarmer />
      <div className="profile-container saira-extra-condensed-regular">
        <h1>Welcome, {profileData.username}!</h1>
        <div className="profile-info">
          <div className="edit-profile-button">
            <button onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <form className="edit-profile-form" onSubmit={handleSubmit}>
            <div className="main-details">
              <div className="item">
                <div className="profile-field">
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
                <div className="profile-field">
                  <label htmlFor="produce_type">Produce Type</label>
                  <input
                    type="text"
                    id="product_type"
                    name="product_type"
                    value={profileData.product_type}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field">
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
                <div className="profile-field">
                  <label htmlFor="zipcode">Pincode</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={profileData.zipcode}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field">
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
              <div className="item">
                <div className="profile-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    disabled
                  />
                </div>
                <div className="profile-field">
                  <label htmlFor="farm_size">Farm Size (Acres)</label>
                  <input
                    type="number"
                    id="farm_size"
                    name="farm_size"
                    value={profileData.farm_size}
                    disabled={!editMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field">
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
                <div className="profile-field">
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
                <div className="profile-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="save-button">
              {editMode && <button type="submit">Save</button>}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FarmerProfile;
