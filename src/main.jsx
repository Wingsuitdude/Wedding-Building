import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add scroll-driven animations
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  
  // Calculate horizontal scroll section bounds
  const horizontalSection = document.querySelector('section:nth-child(2)');
  const horizontalBounds = horizontalSection.getBoundingClientRect();
  const horizontalStart = horizontalSection.offsetTop;
  const horizontalEnd = horizontalStart + windowHeight;

  // Horizontal scroll calculation
  if (scroll >= horizontalStart && scroll <= horizontalEnd) {
    const progress = (scroll - horizontalStart) / (horizontalEnd - horizontalStart);
    const maxScroll = 2 * window.innerWidth; // Adjust based on number of story cards
    const horizontalScroll = progress * maxScroll;
    
    document.documentElement.style.setProperty(
      '--horizontal-translate',
      `-${horizontalScroll}px`
    );
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)