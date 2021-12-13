import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import './style.css';

export default function App() {
  const [showModal, setShowModal] = useState(true);
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

  const handleClose = () => {
    setShowModal(false);
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

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit
            nam et reprehenderit quibusdam temporibus officia dolorum quo sint
            nemo quis, laborum, quasi nisi fugit praesentium debitis
            repudiandae! Sapiente, omnis.
          </p>
        </Modal>
      )}
    </div>
  );
}
