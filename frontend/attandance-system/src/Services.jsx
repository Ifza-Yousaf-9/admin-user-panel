import React from 'react';
import './Services.css'; // Import your SCSS file

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1 className="services-page__title">Our Services</h1>
      <p className="services-page__description">Welcome to the Services page of our student management app. Here's an overview of the services we offer:</p>
      <ul className="services-page__list">
        <li>Admission Management: Streamlined application and enrollment process.</li>
        <li>Course Registration: Easy and efficient course selection for students.</li>
        <li>Fee Management: Convenient online fee payment options.</li>
        <li>Grade Management: Transparent access to grades and transcripts.</li>
        <li>Attendance Management: Real-time tracking of student attendance.</li>
        <li>Communication Portal: Seamless communication between students, faculty, and staff.</li>
      </ul>
      <p className="services-page__info">These services are designed to make your academic journey smooth and efficient.</p>
    </div>
  );
};

export default ServicesPage;
