import React from "react";

const Modal = ({ isOpen, onClose, onReset, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{message.includes("win") ? "Congratulations" : "It's a draw!"}</h1>
        <p>{message}</p>
        <button className="reset" onClick={onReset}>
          Reset
        </button>
        <button className="reset" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
