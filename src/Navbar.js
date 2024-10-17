// Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'; // Create a CSS file for additional styling

const Navbar = () => {
  const navItems = ['Home', 'Features', 'Customers', 'Integrations', 'Login', 'Sign Up'];

  return (
    <nav className="navbar">
      <h1 className="brand">GYM FREAKER</h1>
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={`${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
