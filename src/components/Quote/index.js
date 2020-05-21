import React, { useState, useEffect } from 'react';
import './styles.css';

const Quote = (props) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const api = `http://ron-swanson-quotes.herokuapp.com/v2/quotes`;

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(api);
      const data = await response.json();

      setQuote(data);
      setLoading(false);
    };
    fetchQuote();
  }, [api]);

  return (
    <>
      {loading ? (
        <h2 className='quote'>Loading...</h2>
      ) : (
        <h2 className='quote'>{quote}</h2>
      )}
    </>
  );
};

export default Quote;
