import React from 'react';
import './modal.css'

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          {children}
        </div>
      </div>
    );
  };

  export default Modal;