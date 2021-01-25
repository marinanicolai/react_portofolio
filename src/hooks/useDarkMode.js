import { useState, useEffect } from 'react';
// in gatsby se pare ca se folosesc alt fel de paths
import useMedia from './useMedia';

export default () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setTheme(localTheme);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [prefersDarkMode]);

  return [theme, toggleTheme];
};