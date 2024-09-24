import React, { useState } from 'react';
import './AddApiName.css'

function AddApiName({ addNameToSidebar }) {
  const [apiName, setApiName] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setApiName(e.target.value);
  };

  // Handle button click to add the name to the sidebar
  const handleAddName = () => {
    addNameToSidebar(apiName);
    setApiName(''); // Clear the input after adding
  };

  return (
    <div className='api-container'>
      <input
        className='api-input'
        type="text"
        value={apiName}
        placeholder="Name of the API"
        onChange={handleInputChange}
      />
      <button className='api-button' onClick={handleAddName}>Add Name</button>
    </div>
  );
}

export default AddApiName;
