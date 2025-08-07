import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import styles from '../../assets/scss/pages/_home.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.heroTitle}>
              <span>Supercharge</span> Your Development Workflow
            </h1>
            <p className={styles.heroSubtitle}>
              A futuristic suite of tools designed to boost your productivity and creativity
            </p>
            <div className={styles.heroButtons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.primaryButton}
              >
                Explore Tools
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.secondaryButton}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className={styles.heroIllustration}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.quantumSphere}></div>
          </motion.div>
        </section>
        
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <h2>Powerful Features</h2>
            <p>Everything you need in one place</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized for speed and performance'
              },
              {
                icon: '🔒',
                title: 'Secure',
                description: 'All processing happens in your browser'
              },
              {
                icon: '🆓',
                title: 'Free Forever',
                description: 'No hidden costs or subscriptions'
              },
              {
                icon: '🧩',
                title: 'Extensible',
                description: 'New tools added regularly'
              },
              {
                icon: '🌐',
                title: 'Accessible',
                description: 'Works on all modern browsers'
              },
              {
                icon: '🔮',
                title: 'Futuristic',
                description: 'Cutting-edge UI and technology'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className={styles.toolsPreview}>
          <div className={styles.sectionHeader}>
            <h2>Popular Tools</h2>
            <p>Try our most used utilities</p>
          </div>
          
          <div className={styles.toolsGrid}>
            {[
              {
                title: 'Password Generator',
                category: 'Security',
                icon: '🔑',
                link: '/tools/developer/password-generator'
              },
              {
                title: 'JSON Formatter',
                category: 'Developer',
                icon: '{}',
                link: '/tools/developer/json-formatter'
              },
              {
                title: 'Image Compressor',
                category: 'Image Tools',
                icon: '🖼️',
                link: '/tools/image-tools/image-compressor'
              },
              {
                title: 'Crypto Ticker',
                category: 'Crypto',
                icon: '₿',
                link: '/tools/crypto/crypto-ticker'
              }
            ].map((tool, index) => (
              <motion.a
                key={index}
                href={tool.link}
                className={styles.toolCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.toolIcon}>{tool.icon}</div>
                <div className={styles.toolContent}>
                  <h3>{tool.title}</h3>
                  <span>{tool.category}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>DevSuite</h3>
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Tools</h4>
              <a href="/tools/developer">Developer</a>
              <a href="/tools/crypto">Crypto</a>
              <a href="/tools/image-tools">Image</a>
              <a href="/tools/pdf-tools">PDF</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <a href="/about">About</a>
              <a href="/news">News</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://github.com">GitHub</a>
              <a href="https://discord.com">Discord</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const createApp = () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
};