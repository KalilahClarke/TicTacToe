import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  console.log(message)
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{message.includes('win')? 'Congratulations': "It's a draw!"}</h1>
        <p>{message}</p>
        <button className="reset" onClick={onClose}>Reset</button>
        <button className="reset" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
