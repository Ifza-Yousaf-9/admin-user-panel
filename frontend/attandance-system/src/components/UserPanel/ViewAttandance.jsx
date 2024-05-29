// ViewAttendance.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './ViewAttendance.css';

const ViewAttendance = () => {
  const { userId } = useParams();
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const url = `http://localhost:8000/api/attendance/view/${userId}`;
        console.log('Fetching attendance from:', url);
    
        const response = await axios.get(url);
console.log('Attendance response:', response.data);

      } catch (error) {
        console.error('Error fetching attendance records:', error);
        setError(error);
      }
    };
    }
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="view-attendance-container">
      <h1>Attendance Records for {userName}</h1>
      <ul>
        {attendanceRecords.map((record) => (
          <li key={record._id}>
            {new Date(record.date).toLocaleString()}: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default ViewAttendance;
