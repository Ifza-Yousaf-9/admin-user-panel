import React, { useState } from 'react';

const MarkAttendance = ({ userId }) => {
  const [userName, setUserName] = useState('');

  const markAttendance = () => {
    axios.post('http://localhost:8000/api/attendance/mark', {
      userId,
      status: 'Present'
    })
    .then(() => {
      console.log('Attendance marked successfully');
      fetchUserName();
    })
    .catch((error) => {
      console.error('Error marking attendance:', error);
    });
  };

  const fetchUserName = () => {
    axios.get(`http://localhost:8000/api/users/${userId}`)
    .then((response) => {
      setUserName(response.data.name);
    })
    .catch((error) => {
      console.error('Error fetching user details:', error);
    });
  };

  return (
    <div>
      <button onClick={markAttendance}>Mark Attendance</button>
      {userName && <p>User {userName} has marked attendance.</p>}
    </div>
  );
};

export default MarkAttendance;
