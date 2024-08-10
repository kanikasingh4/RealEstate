import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Correct import for CSS modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="https://www.youtube.com/@yashhhtalks" legacyBehavior>
          <a className={styles.youtubeLink}>
            <FaYoutube className={styles.youtubeIcon} />
          </a>
        </Link>
        <span className={styles.navbarTitle}>Real Estate App</span>
      </div>
      <div className={styles.navItem}>
        <Link href="/" legacyBehavior>
          <a className={styles.navLink}>Home</a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href="/search" legacyBehavior>
          <a className={styles.navLink}>Search</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
