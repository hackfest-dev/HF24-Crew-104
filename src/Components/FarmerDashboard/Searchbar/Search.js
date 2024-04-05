// Search.js
import React from 'react';
import './Search.css';

function Search({ handleInputChange }) {
  return (
    <div className='search-container'>
      <div className='status-flex'>
        <input 
          type='text'
          className='search-input'
          placeholder='Enter your search order'
          onChange={handleInputChange} 
        />
      </div>
    </div>
  );
}

export default Search;