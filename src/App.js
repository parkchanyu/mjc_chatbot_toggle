import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Sidebar from './components/Sidebar';
import QuickLinks from './components/QuickLinks';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <MainBanner />
        <Sidebar />
      </div>
      <QuickLinks />
      <Chatbot />
    </div>
  );
}

export default App; 