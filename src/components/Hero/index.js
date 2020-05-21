import React, { useState, useEffect } from 'react';
import './styles.css';

import ron1 from './img/ron1.jpg';
import ron2 from './img/ron2.jpg';
import ron3 from './img/ron3.jpg';
import ron4 from './img/ron4.jpg';
import ron5 from './img/ron5.jpg';
import ron6 from './img/ron6.jpg';

const picsArr = [ron1, ron2, ron3, ron4, ron5, ron6];

export default () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const index = getRandomInt(1, 6);
    const picName = picsArr[index];
    setPicture(picName);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        '<h2>Loading... </h2>'
      ) : (
        <img src={picture} alt='Ron Swanson' />
      )}
    </>
  );
};
