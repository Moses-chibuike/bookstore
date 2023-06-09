import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

// stylesheet
import './Bookform.css';

function Bookform() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const setValue = (ev) => {
    const { value } = ev.target;
    if (ev.target.name === 'title') {
      setFormData({
        ...formData,
        title: value,
      });
    } else {
      setFormData({
        ...formData,
        author: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      const newBook = { ...formData, item_id: uuidv4(), category: 'Fiction' };
      dispatch(addBook(newBook));
      setFormData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-actions">
          <input type="text" placeholder="Book title" name="title" value={formData.title} onChange={setValue} />
          <input type="text" placeholder="Category" name="author" value={formData.author} onChange={setValue} />
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default Bookform;
