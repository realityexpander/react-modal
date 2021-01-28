import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

// https://github.com/reactjs/react-modal

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}> Open Modal</button>
      <Modal 
          isOpen={modalIsOpen} 
          shouldCloseOnOverlayClick={true}
          onRequestClose={()=> setModalIsOpen(false)}
        >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
