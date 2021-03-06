import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ modalImage, onClose }) => {
    
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        // return window.removeEventListener('keydown', handleKeyDown);
    },[onClose]);


    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return (createPortal(<div className="Overlay" onClick={handleOverlayClick}>
        <div className="Modal">
            <img src={modalImage.largeImageURL} alt={modalImage.tags} />
        </div>
    </div>, modalRoot));
    
}

Modal.propTypes = {
    modalImage: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
}   

export default Modal;