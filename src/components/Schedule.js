import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Schedule = () => {
  const scheduleData = [
    { day: 'Monday', time: '10:00 AM - 11:00 AM', program: 'Cardio Blast' },
    { day: 'Tuesday', time: '3:00 PM - 4:00 PM', program: 'Strength Training' },
    { day: 'Wednesday', time: '9:00 AM - 10:00 AM', program: 'Hot Yoga' },
    { day: 'Thursday', time: '4:00 PM - 5:00 PM', program: 'Cardio Blast' },
    { day: 'Friday', time: '11:00 AM - 12:00 PM', program: 'Strength Training' },
    { day: 'Saturday', time: '2:00 PM - 3:00 PM', program: 'Hot Yoga' },
    { day: 'Sunday', time: '5:00 PM - 6:00 PM', program: 'Cardio Blast' },
    // Add more schedule data here
  ];

  return (
    <Container className="mt-5">
      <h2>Class Schedule</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.program}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Schedule;
