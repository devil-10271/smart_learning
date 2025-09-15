import React, { useState } from "react";
import "./Student_Profile.css";
import Navi from "../Basics/Navbar";
import { useNavigate } from "react-router-dom";

export default function FacultyProfile() {

    const Navig = useNavigate()
    const role = localStorage.getItem("role")
    if (!role) {
        console.log(!role)
        setTimeout(() => {
            Navig("/")
        }, 100);
    }

    const [profile, setProfile] = useState({
        firstname: "",
        middlename: "",
        surname: "",
        name: "",
        username: "",
        bio: "",
        field: "",
        profilePic: null,
        platform: "",
        course: "",
        classLevel: "",
        semester: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "platform") {
            setProfile((prev) => ({
                ...prev,
                platform: value,
                course: "",
                classLevel: "",
                semester: "",
            }));
        } else if (name === "course") {
            setProfile((prev) => ({
                ...prev,
                course: value,
                classLevel: "",
            }));
        } else {
            setProfile((prev) => ({ ...prev, [name]: value }));
        }
        // console.clear(console)
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile({
                ...profile,
                profilePic: URL.createObjectURL(file),
            });
        }
    };

    // Course options based on platform
    const courseOptions = {
        School: ["Science", "Commerce", "Arts", "General"],
        Diploma: ["Computer Engineering", "Civil Engineering", "Mechanical", "Electrical"],
        UG: ["B.Sc", "B.Com", "B.A", "B.Tech", "BBA"],
        PG: ["M.Sc", "M.Com", "M.A", "M.Tech", "MBA"],
    };

    // Class options (only for School + Science)
    const classOptions = ["9th", "10th", "11th", "12th"];

    // Semester options (for Diploma, UG, PG)
    // Semester options by platform
    //   const semesterOptions = {
    //     Diploma: ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem"],
    //     UG: [
    //       "1st Sem",
    //       "2nd Sem",
    //       "3rd Sem",
    //       "4th Sem",
    //       "5th Sem",
    //       "6th Sem",
    //       "7th Sem",
    //       "8th Sem",
    //     ],
    //     PG: ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem"],
    //   };


    return (
        <>
            <Navi data={0} />
            <div className="student-profile">
                {/* Left Panel */}
                <div className="left-panel">
                    <div className="profile-pic-section">
                        <label htmlFor="profilePic" className="pic-label">
                            {profile.profilePic ? (
                                <img src={profile.profilePic} alt="Profile" className="profile-pic" />
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

                    {/* Show selected details */}
                    {profile.platform && <p><b>Platform:</b> {profile.platform}</p>}
                    {profile.course && <p><b>Course:</b> {profile.course}</p>}
                    {profile.classLevel && <p><b>Class:</b> {profile.classLevel}</p>}
                    {profile.semester && <p><b>Semester:</b> {profile.semester}</p>}
                </div>

                {/* Right Panel */}
                <div className="right-panel">
                    <h3>{localStorage.getItem("role").charAt(0).toUpperCase() + localStorage.getItem("role").slice(1)} Information</h3>
                    <form className="info-form">
                        <div className="names">
                            <input
                                type="text"
                                name="firstname"
                                value={profile.firstname}
                                onChange={handleChange}
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                name="middlename"
                                value={profile.middlename}
                                onChange={handleChange}
                                placeholder="Middle Name"
                            />
                            <input
                                type="text"
                                name="surname"
                                value={profile.surname}
                                onChange={handleChange}
                                placeholder="Surname"
                            />
                        </div>
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

                        {/* Dropdown for platform */}
                        <select name="platform" value={profile.platform} onChange={handleChange}>
                            <option value="">Select Platform</option>
                            <option value="School">School</option>
                            <option value="Diploma">Diploma</option>
                            <option value="UG">UG</option>
                            <option value="PG">PG</option>
                        </select>

                        {/* Dropdown for course */}
                        <select
                            name="course"
                            value={profile.course}
                            onChange={handleChange}
                            disabled={!profile.platform}
                        >
                            <option value="">Select Course</option>
                            {profile.platform &&
                                courseOptions[profile.platform].map((course, i) => (
                                    <option key={i} value={course}>
                                        {course}
                                    </option>
                                ))}
                        </select>

                        {/* Conditional Dropdowns */}
                        {profile.platform === "School" && profile.course === "Science" && (
                            <select
                                name="classLevel"
                                value={profile.classLevel}
                                onChange={handleChange}
                            >
                                <option value="">Select Class</option>
                                {classOptions.map((cls, i) => (
                                    <option key={i} value={cls}>
                                        {cls}
                                    </option>
                                ))}
                            </select>
                        )}

                        {/* Semester Dropdown for Diploma, UG, PG */}
                        {/* {(profile.platform === "Diploma" ||
              profile.platform === "UG" ||
              profile.platform === "PG") && (
                <select
                  name="semester"
                  value={profile.semester}
                  onChange={handleChange}
                >
                  <option value="">Select Semester</option>
                  {semesterOptions[profile.platform].map((sem, i) => (
                    <option key={i} value={sem}>
                      {sem}
                    </option>
                  ))}
                </select>
              )} */}


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
                                    className={`grid-cell ${Math.random() > 0.7 ? "active" : ""}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
