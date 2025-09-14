// src/components/Programs.jsx
import React, { useState } from "react";
import { programsData } from "./data/programsData";
import { subjectLinks } from "./data/subjectLinks";
import { videoLinks } from "./data/videoLinks"; // You'll need to create this
import "./Programs.css"; // import external css
import Nav from "../Basics/Navbar";

const Programs = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [activeTab, setActiveTab] = useState("subjects"); // subjects, notes, videos

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setActiveTab("subjects");
  };

  const handleNotesClick = (subject) => {
    setSelectedSubject(subject);
    setActiveTab("notes");
  };

  const handleVideosClick = (subject) => {
    setSelectedSubject(subject);
    setActiveTab("videos");
  };

  const goBackToSubjects = () => {
    setSelectedSubject(null);
    setActiveTab("subjects");
  };

  return (
    <div className="programs-container">
      <Nav/>
      <h2 className="programs-title">📚 Explore Programs</h2>

      {/* Levels */}
      <div className="levels-container">
        {programsData.map((program) => (
          <button
            key={program.level}
            onClick={() => {
              setSelectedLevel(program.level);
              setSelectedCourse(null);
              setSelectedSubject(null);
              setActiveTab("subjects");
            }}
            className={`level-btn ${
              selectedLevel === program.level ? "active" : ""
            }`}
          >
            {program.level}
          </button>
        ))}
      </div>

      {/* Courses */}
      {selectedLevel && !selectedSubject && (
        <div className="courses-section">
          <h3 className="courses-title">Courses in {selectedLevel}</h3>
          <div className="courses-grid">
            {programsData
              .find((p) => p.level === selectedLevel)
              .courses.map((course) => (
                <div
                  key={course.name}
                  onClick={() => setSelectedCourse(course.name)}
                  className={`course-card ${
                    selectedCourse === course.name ? "active" : ""
                  }`}
                >
                  <h4>{course.name}</h4>
                  <p>{course.subjects.length} Subjects</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Subjects Grid */}
      {selectedCourse && !selectedSubject && (
        <div className="subjects-section">
          <h4 className="subjects-title">Subjects in {selectedCourse}</h4>
          <div className="subjects-grid">
            {programsData
              .find((p) => p.level === selectedLevel)
              .courses.find((c) => c.name === selectedCourse)
              .subjects.map((subject, index) => (
                <div
                  key={index}
                  className="subject-card-wrapper"
                  onClick={() => handleSubjectClick(subject)}
                >
                  <div className="subject-main-card">
                    <h5 className="subject-name">{subject}</h5>
                    <span className="subject-arrow">👆</span>
                  </div>
                  
                  {/* Notes and Videos Cards */}
                  <div className="subject-options">
                    <div 
                      className={`option-card notes-card ${!subjectLinks[subject] || subjectLinks[subject] === "#" ? "disabled" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (subjectLinks[subject] && subjectLinks[subject] !== "#") {
                          handleNotesClick(subject);
                        }
                      }}
                    >
                      <span className="option-icon">📄</span>
                      <span className="option-text">Notes</span>
                    </div>
                    
                    <div 
                      className={`option-card videos-card ${!videoLinks[subject] || videoLinks[subject] === "#" ? "disabled" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoLinks[subject] && videoLinks[subject] !== "#") {
                          handleVideosClick(subject);
                        }
                      }}
                    >
                      <span className="option-icon">🎥</span>
                      <span className="option-text">Videos</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Subject Detail View with Navigation */}
      {selectedSubject && (
        <div className="subject-detail-section">
          <div className="subject-header">
            <button className="back-btn" onClick={goBackToSubjects}>
              ← Back to Subjects
            </button>
            <h3 className="subject-detail-title">{selectedSubject}</h3>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "notes" ? "active" : ""}`}
              onClick={() => setActiveTab("notes")}
            >
              📄 Notes
            </button>
            <button
              className={`tab-btn ${activeTab === "videos" ? "active" : ""}`}
              onClick={() => setActiveTab("videos")}
            >
              🎥 Videos
            </button>
          </div>

          {/* Content Area */}
          <div className="content-area">
            {activeTab === "notes" && (
              <div className="notes-content">
                {subjectLinks[selectedSubject] && subjectLinks[selectedSubject] !== "#" ? (
                  <div className="resource-card">
                    <h4>📚 Study Notes</h4>
                    <p>Access comprehensive notes for {selectedSubject}</p>
                    <a
                      href={subjectLinks[selectedSubject]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-btn"
                    >
                      Open PDF Notes
                    </a>
                  </div>
                ) : (
                  <div className="no-content">
                    <span className="no-content-icon">📝</span>
                    <h4>Notes Coming Soon</h4>
                    <p>We're preparing comprehensive notes for {selectedSubject}. Check back later!</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "videos" && (
              <div className="videos-content">
                {videoLinks[selectedSubject] && videoLinks[selectedSubject] !== "#" ? (
                  <div className="resource-card">
                    <h4>🎬 Video Lectures</h4>
                    <p>Watch detailed video explanations for {selectedSubject}</p>
                    <a
                      href={videoLinks[selectedSubject]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-btn"
                    >
                      Watch Videos
                    </a>
                  </div>
                ) : (
                  <div className="no-content">
                    <span className="no-content-icon">🎥</span>
                    <h4>Videos Coming Soon</h4>
                    <p>We're creating engaging video content for {selectedSubject}. Stay tuned!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;    