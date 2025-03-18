import React, { useState } from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import Filter from '../components/Filter';

function Events() {
  const [events, setEvents] = useState([
    { title: 'Prayer Meeting', date: '2024-07-10', location: 'Church Hall', description: 'Discussing bible verses', category: 'Religious' },
    { title: 'Community Picnic', date: '2024-08-15', location: 'Central Park', description: 'Picnic and fun games', category: 'Social' },
    { title: 'Food Drive', date: '2024-09-20', location: 'Community Center', description: 'Collecting food for the needy', category: 'Charity' },
  ]);
  const [filterCategory, setFilterCategory] = useState('');

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  const filteredEvents = filterCategory
    ? events.filter((event) => event.category === filterCategory)
    : events;

  return (
    <div className="events">
      <Header />
      <div className="events-container">
        <div className="events-left">
          <Filter onFilterChange={handleFilterChange} />
          <EventList events={filteredEvents} />
        </div>
        <div className="events-right">
          <EventForm onAddEvent={handleAddEvent} />
        </div>
      </div>
    </div>
  );
}

export default Events;