import React from 'react';
import './styles.css';
import pic from './swanson-header.jpg';

const Header = (props) => {
  return (
    <div className='header-container'>
      <img className='header-pic' src={pic} alt='Swanson drawing round' />
      <div className='titles-container'>
        <h1 {...props}>Hey, son!</h1>
        <h2>Check out my killer quotes!</h2>
      </div>
    </div>
  );
};

export default Header;
