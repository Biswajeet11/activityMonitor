import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.any
}

export default Layout;
