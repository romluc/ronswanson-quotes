import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.css';

const Quote = (props) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get(
        'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
      );
      const quote = await response.data;

      setQuote(quote);
      setLoading(false);

      toast.dark('Tip: refresh to see many more!');
    };
    fetchQuote();
  }, []);

  return (
    <>
      {loading ? <h2>Loading...</h2> : <h2 className='quote'>{quote}</h2>}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Quote;
