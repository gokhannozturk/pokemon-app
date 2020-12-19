import React from 'react';
import { Link } from 'react-router-dom';

import './stylesLayout.less';

const Layout = ({ title, children }) => {
  return (
    <div>
      <nav className="layout-nav">
        <Link className="layout-links" to="/">
          <h2>Pokemon App</h2>
        </Link>
      </nav>
      <main className="main-wrapper">{children}</main>
      <footer className="layout-footer">
        <a className="layout-links" href="https://pokeapi.co/" target="blank">
          PokeApi
        </a>
      </footer>
    </div>
  );
};

export default Layout;
