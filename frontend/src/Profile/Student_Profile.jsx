import React, { useState } from "react";
import "./Student_Profile.css";

export default function StudentProfile() {
  const [profile, setProfile] = useState({
    name: "Student Name",
    username: "student-123",
    bio: "Learning and growing every day!",
    study: "Computer Science",
    field: "Engineering",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="student-profile">
      {/* Left Column */}
      <div className="left-panel">
        <div className="profile-pic-section">
          <label htmlFor="profilePic" className="pic-label">
            {profile.profilePic ? (
              <img
                src={profile.profilePic}
                alt="Profile"
                className="profile-pic"
              />
            ) : (
              <div className="profile-placeholder">Upload</div>
            )}
          </label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden-input"
          />
        </div>
        <h2>{profile.name}</h2>
        <p className="username">@{profile.username}</p>
        <p className="bio">{profile.bio}</p>
      </div>

      {/* Right Column */}
      <div className="right-panel">
        <h3>Student Information</h3>
        <form className="info-form">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Bio"
          ></textarea>
          <input
            type="text"
            name="study"
            value={profile.study}
            onChange={handleChange}
            placeholder="What do you study?"
          />
          <input
            type="text"
            name="field"
            value={profile.field}
            onChange={handleChange}
            placeholder="Field/Department"
          />
        </form>

        <div className="contributions">
          <h4>Activity (Study Contributions)</h4>
          <div className="grid">
            {Array.from({ length: 98 }).map((_, i) => (
              <div
                key={i}
                className={`grid-cell ${
                  Math.random() > 0.7 ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
