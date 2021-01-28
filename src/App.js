import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

// https://github.com/reactjs/react-modal

Modal.setAppElement('#root') // for screen rendering

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}> Open Modal</button>
      <Modal 
          isOpen={modalIsOpen} 
          shouldCloseOnOverlayClick={true} // set to false to disable click away
          onRequestClose={()=> setModalIsOpen(false)}
          style = {
            {
              overlay: {
                backgroundColor: 'grey'  
              },
              content: {
                color: 'orange'
              }
            }
          }
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
