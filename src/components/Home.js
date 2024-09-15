import React from 'react';
import './Home.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Fruit.AI</h1>
        <p>“Be Healthy!”</p>

        <div className="grid">
          <div className="grid-item chat" onClick={() => alert('Chat Page')}>
            <span>Chat.</span>
          </div>
          <div className="grid-item translator" onClick={() => alert('Translator Page')}>
            <img src="https://img.icons8.com/color/48/000000/google-translate.png" alt="Translator" />
          </div>
          <div className="grid-item faqs" onClick={() => alert('FAQs Page')}>
            <span>FAQs</span>
          </div>
          <div className="grid-item about" onClick={() => alert('About Page')}>
            <span>About</span>
          </div>
        </div>

        <div className="pagination-dots">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
