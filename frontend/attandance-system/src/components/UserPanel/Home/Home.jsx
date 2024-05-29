// Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false);
  const [userId] = useState("6655ffcaa9225e27de8bf46"); // Set the user ID appropriately

  const handleMarkAttendance = async () => {
    if (!isAttendanceMarked) {
      try {
        const response = await axios.post('http://localhost:8000/api/attendance/mark', {
          userId,
          status: 'Present'
        });
        if (response.status === 200) {
          setIsAttendanceMarked(true);
          alert("Attendance marked successfully");
        }
      } catch (error) {
        console.error("Error marking attendance:", error);
        alert("Failed to mark attendance");
      }
    } else {
      alert("Attendance already marked for today!");
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Home</h1>
        <img src="/download.png" alt="Logo" height="40px" />
      </div>
      <div className="attendance-status" style={{ margin: '90px 0' }}>
        {isAttendanceMarked ? (
          <p>
            Attendance Marked{' '}
            <img src="/tickgreen.png" alt="Marked" height="25px" style={{ marginLeft: '10px' }} />
          </p>
        ) : (
          <p>
            Attendance not Marked <span className="status-icon">❌</span>
          </p>
        )}
      </div>
      <div className="home-buttons">
        <button className="home-button" onClick={handleMarkAttendance} disabled={isAttendanceMarked}>
          Mark Attendance
        </button>
        <Link to={`/ViewAttendance/${userId}`} className="home-button">View Attendance</Link>
      </div>
    </div>
  );
};

export default Home;
