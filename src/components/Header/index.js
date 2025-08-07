import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoPrimary}>Dev</span>
          <span className={styles.logoAccent}>Suite</span>
        </a>

        <button 
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li><a href="/" className={styles.active}>Home</a></li>
            <li><a href="/tools">Tools</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;