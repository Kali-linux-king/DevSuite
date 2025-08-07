import '../scss/main.scss';
import { createApp } from './modules/app';
import { initQuantumEffects } from './modules/quantum-effects';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the main app
  createApp();
  
  // Initialize quantum effects (particles, animations)
  initQuantumEffects();
  
  // Register service worker if supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(
        registration => {
          console.log('ServiceWorker registration successful');
        },
        err => {
          console.log('ServiceWorker registration failed: ', err);
        }
      );
    });
  }
});