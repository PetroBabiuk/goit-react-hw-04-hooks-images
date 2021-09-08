import React, {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (modalImage) => {
    setShowModal(true);
    setModalImage(modalImage);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  const getQuery = query => {
    setQuery(query);
  }

  return (
      <div>
        {showModal && <Modal modalImage={modalImage} onClose={closeModal} />}
        <Searchbar onSubmit={getQuery} />
        <ImageGallery query={query} onClick={openModal} />
        <ToastContainer />
      </div>   
    )
}

export default App;