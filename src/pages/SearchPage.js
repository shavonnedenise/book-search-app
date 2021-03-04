import React, {useState} from 'react';
import axios from 'axios';

import BookSearchForm from '../components/BookSearchForm';
import Loader from '../components/Loader';
import BooksList from '../components/BooksList';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
     // set loading Before API operation starts
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    }
    catch(error) {
      setError(true);
    }
    // After API operation end
    setLoading(false);
  }

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  // Submit handler
  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    // Call fetch books async function
    fetchBooks();
  }

  return (
    <section>
      <BookSearchForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
        />
      <Loader
        loading={loading}
        searchTerm={searchTerm}
      />
      <BooksList books={books} />
    </section>
  );
};

export default SearchPage;