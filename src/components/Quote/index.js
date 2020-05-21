import React, { useState, useEffect } from 'react';
import './styles.css';

const Quote = (props) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        `http://ron-swanson-quotes.herokuapp.com/v2/quotes`
      );
      const data = await response.json();

      setQuote(data);
      setLoading(false);
    };
    fetchQuote();
  }, []);

  return <>{<h2 className='quote'>{quote}</h2>}</>;
};

export default Quote;
