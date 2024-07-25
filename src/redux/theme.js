// src/components/ThemeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './actions';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="btn btn-secondary" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
