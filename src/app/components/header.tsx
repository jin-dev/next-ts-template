/* eslint-disable react/button-has-type */
// components/Header.js
import { useState } from 'react';

import {
  hamburgerStyles,
  headerStyles,
  linkStyles,
  logoStyles,
  mobileMenuStyles,
  navStyles,
} from './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={headerStyles}>
      <div className={logoStyles}>
        <a href="/">jin-Dev AI Platform</a>
      </div>
      <button
        className={hamburgerStyles}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${navStyles} ${menuOpen ? mobileMenuStyles : ''}`}>
        <a href="/about" className={linkStyles}>
          About
        </a>
        <a href="/features" className={linkStyles}>
          Features
        </a>
        <a href="/pricing" className={linkStyles}>
          Pricing
        </a>
        <a href="/contact" className={linkStyles}>
          Contact
        </a>
      </nav>
    </header>
  );
}
