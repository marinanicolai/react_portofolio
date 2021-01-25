import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

/**
 * TODO: check relative paths
 */

// press CTRL + CLICK to go  to component
import { Footer } from '../../theme/Footer';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  )
};