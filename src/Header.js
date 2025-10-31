import React, { useEffect, useState } from 'react';

function Header({ onStartVisualizer }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${menuOpen ? 'hidden-under-menu' : ''}`}>
        <a href="/" className="logo" aria-label="Wall-to-Wall Home">
          <img src="/logo.svg" alt="Wall-to-Wall Logo" />
        </a>
        <div className="nav-wrap">
          <nav className="nav-group" aria-label="Primary">
            <a className="active" href="#">Home</a>
            <a href="#" onClick={onStartVisualizer}>Visualizer</a>
            <a href="#">Products</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="brand-title">Nexus</div>
        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button className="menu-close" aria-label="Close menu" onClick={closeMenu}>
          ✕
        </button>
        <nav className="mobile-nav" aria-label="Mobile">
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={() => { closeMenu(); onStartVisualizer && onStartVisualizer(); }}>Visualizer</a>
          <a href="#" onClick={closeMenu}>Products</a>
          <a href="#" onClick={closeMenu}>Projects</a>
          <a href="#" onClick={closeMenu}>About</a>
          <a href="#" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
