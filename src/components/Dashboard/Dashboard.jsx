import React from 'react';
import { Link } from 'react-router-dom';
import StudyStatisticsChart from './StudyStatisticsChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title"></h2>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/study-area">Study Area</Link></li>
            <li><Link to="/todo-list">ToDo List</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>SMART STUDY MATERIAL ACCESS</h1>
        </header>
        <section className="welcome-section">
          <h2>Welcome, bwubta24191@brainwareuniversity.ac.in <span role="img" aria-label="waving hand">👋</span></h2>
        </section>
        <section className="cards-grid">
          <div className="card attendance-card">
            <h3>Attendance</h3>
            <div className="circle-progress green">
              <span className="percentage">95%</span>
            </div>
            <p className="status">Present</p>
            <p className="classes">57/60 classes</p>
            <p className="semester">Semester 5</p>
          </div>
          <div className="card exam-score-card">
            <h3>Exam Score</h3>
            <div className="circle-progress red">
              <span className="score">9.34</span>
            </div>
            <p className="cgpa">CGPA</p>
            <p className="percentage">93.4%</p>
            <p className="semester">Semester 5</p>
          </div>
          <div className="card study-goals-card">
            <h3>Study Goals</h3>
            <div className="stat-item">
              <span>Total Study Hours</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="stat-value">34.5 hours</span>
            </div>
            <div className="stat-item">
              <span>Average Study Hours/Day</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
              <span className="stat-value">4.9 hours</span>
            </div>
            <div className="stat-item">
              <span>Weekly Goal Progress</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="stat-value">21 / 28 hours</span>
            </div>
          </div>
          <div className="card upcoming-deadlines-card">
            <h3>Upcoming Deadlines</h3>
            <ul>
              <li className="urgent">
                <span role="img" aria-label="warning">⚠️</span> Python Assignment 3
                <small>3 days left</small>
              </li>
              <li>
                <span role="img" aria-label="calendar">📅</span> COA Midterm Exam
                <small>6 days left</small>
              </li>
              <li>
                <span role="img" aria-label="calendar">📅</span> DBMS Project Submission
                <small>10 days left</small>
              </li>
            </ul>
          </div>
          <div className="card course-progress-card">
            <h3>Course Progress</h3>
            <div className="course">
              <span>Python</span>
              <progress value="75" max="100"></progress>
              <span>75%</span>
            </div>
            <div className="course">
              <span>COA</span>
              <progress value="60" max="100"></progress>
              <span>60%</span>
            </div>
            <div className="course">
              <span>DBMS</span>
              <progress value="80" max="100"></progress>
              <span>80%</span>
            </div>
          </div>
          <div className="card grade-trends-card">
            <h3>Grade Trends</h3>
            <p>Python: 9.2</p>
            <p>COA: 8.8</p>
            <p>DBMS: 9.5</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
