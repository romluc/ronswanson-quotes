import React, { useState, useEffect } from 'react';
import './styles.css';

import ron1 from './img/ron1.jpg';
import ron2 from './img/ron2.jpg';
import ron3 from './img/ron3.jpg';
import ron4 from './img/ron4.jpg';
import ron5 from './img/ron5.jpg';
import ron6 from './img/ron6.jpg';
import ron7 from './img/ron7.jpg';
import ron8 from './img/ron8.jpg';
import ron9 from './img/ron9.jpg';
import ron10 from './img/ron10.jpg';
import ron11 from './img/ron11.jpg';
import ron12 from './img/ron12.png';

const picsArr = [
  ron1,
  ron2,
  ron3,
  ron4,
  ron5,
  ron6,
  ron7,
  ron8,
  ron9,
  ron10,
  ron11,
  ron12,
];

export default () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const index = getRandomInt(1, 12);
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
