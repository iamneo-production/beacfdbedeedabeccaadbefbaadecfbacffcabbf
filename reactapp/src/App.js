import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cardCreated, setCardCreated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'contactno') {
      setContactNo(value);
    } else if (name === 'image') {
      setImageUrl(value);
    }
  };

  const handleCreateCard = () => {
    if (name && email && contactNo && imageUrl) {
      setCardCreated(true);
    }
  };

  const handleDeleteCard = () => {
    setCardCreated(false);
  };

  return (
    <div className="App">
      <h1>Create Card</h1>
      <div>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          name="name"
          data-testid="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          data-testid="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="contactno">Enter contact number:</label>
        <input
          type="text"
          id="contactno"
          name="contactno"
          data-testid="contactno"
          value={contactNo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="image">Paste profile picture URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          data-testid="image"
          value={imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <button data-testid="create" onClick={handleCreateCard}>
        Create Card
      </button>
      {cardCreated && (
        <div className="card">
          <img style={{ width: 100, height: 100 }} className='profile-picture' src={imageUrl} alt="Profile" />
          <h2 data-testid="cardname">{name}</h2>
          <p data-testid="cardemail">{email}</p>
          <p data-testid="contactnumber">{contactNo}</p>
          <button data-testid="delete" onClick={handleDeleteCard}>
            Delete Card
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
