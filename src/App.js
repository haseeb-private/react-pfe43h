import React, { useState } from 'react';
import Title from './components/Title'
import './style.css';

export default function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  const onClickHandler = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
  };
  return (
    <div>
      <Title />
      <h1>Hello StackBlitz!</h1>
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      )}
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      )}
      {showEvents && (
        <p>
          {events.map((event, index) => (
            <>
              <p key={event.id}>
                {index}-{event.title}
              </p>
              <button onClick={() => onClickHandler(event.id)}>X</button>
            </>
          ))}
        </p>
      )}
    </div>
  );
}
