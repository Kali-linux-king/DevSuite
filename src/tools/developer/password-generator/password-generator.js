import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import styles from './password-generator.scss';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [strength, setStrength] = useState(0);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const { uppercase, lowercase, numbers, symbols } = options;
    let charset = '';
    let newPassword = '';
    
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (!charset) {
      setPassword('Select at least one option');
      return;
    }
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    
    setPassword(newPassword);
    calculateStrength(newPassword);
    setCopied(false);
  }, [length, options]);

  const calculateStrength = (pass) => {
    let score = 0;
    
    // Length contributes up to 50 points (max at 20 chars)
    score += Math.min(pass.length * 2.5, 50);
    
    // Variety contributes up to 50 points
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pass);
    
    const varietyCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;
    score += (varietyCount - 1) * 12.5;
    
    setStrength(Math.min(Math.floor(score), 100));
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleOption = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Password Generator</h1>
        <p className={styles.subtitle}>Create strong, secure passwords</p>
        
        <div className={styles.passwordDisplay}>
          <input
            type="text"
            value={password}
            readOnly
            className={styles.passwordInput}
            placeholder="Your password will appear here"
          />
          <button 
            onClick={copyToClipboard}
            className={styles.copyButton}
            disabled={!password}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        <div className={styles.strengthMeter}>
          <div 
            className={styles.strengthBar}
            style={{ width: `${strength}%`, 
                    background: strength < 40 ? '#ff4d4d' : 
                               strength < 70 ? '#ffa64d' : 
                               strength < 90 ? '#ffff4d' : '#4dff4d' }}
          ></div>
          <span className={styles.strengthLabel}>
            {strength < 40 ? 'Weak' : 
             strength < 70 ? 'Moderate' : 
             strength < 90 ? 'Strong' : 'Very Strong'}
          </span>
        </div>
        
        <div className={styles.options}>
          <label className={styles.optionLabel}>
            <span>Password Length: {length}</span>
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className={styles.rangeInput}
            />
          </label>
          
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={options.uppercase}
                onChange={() => toggleOption('uppercase')}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              Include Uppercase (A-Z)
            </label>
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={options.lowercase}
                onChange={() => toggleOption('lowercase')}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              Include Lowercase (a-z)
            </label>
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={options.numbers}
                onChange={() => toggleOption('numbers')}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              Include Numbers (0-9)
            </label>
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={options.symbols}
                onChange={() => toggleOption('symbols')}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              Include Symbols (!@#$)
            </label>
          </div>
        </div>
        
        <button 
          onClick={generatePassword}
          className={styles.generateButton}
        >
          Generate Password
        </button>
      </motion.div>
    </div>
  );
};

const container = document.getElementById('password-generator-app');
const root = createRoot(container);
root.render(<PasswordGenerator />);