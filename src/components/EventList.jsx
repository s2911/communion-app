import React from 'react';

function EventList({ events }) {
  return (
    <table className="event-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Location</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.title}</td>
            <td>{event.date}</td>
            <td>{event.location}</td>
            <td>{event.description}</td>
            <td>{event.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventList;