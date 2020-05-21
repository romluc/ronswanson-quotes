import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const Quote = (props) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = () => {
      axios
        .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then((response) => {
          const quote = response.data;
          setQuote(quote);
        });

      setLoading(false);
    };
    fetchQuote();
  }, []);

  return (
    <>{loading ? <h2>Loading...</h2> : <h2 className='quote'>{quote}</h2>}</>
  );
};

export default Quote;
