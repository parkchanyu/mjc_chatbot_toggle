import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <div className="top-nav-links">
          <a href="#university">대학</a>
          <a href="#admission">입학</a>
          <a href="#lifelong">평생</a>
          <a href="#employment">취업</a>
          <a href="#contract">계약</a>
          <a href="#community">명지커뮤니티</a>
          <a href="#innovation">혁신</a>
          <a href="#linc">LINC 3.0</a>
          <a href="#mrcc">M-RCC</a>
          <a href="#counseling">심리상담</a>
        </div>
        <div className="top-nav-right">
          <a href="#home">HOME</a>
          <a href="#login">LOGIN</a>
          <button className="english-btn">ENGLISH</button>
        </div>
      </div>

      {/* Logo and Search Section */}
      <div className="logo-search-section">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon">🌳</div>
            <span className="logo-text">명지전문대학 MYONGJI COLLEGE</span>
          </div>
          <div className="social-links">
            <a href="#youtube" className="social-icon">📺</a>
            <a href="#instagram" className="social-icon">📷</a>
            <button className="office365-btn">오피스 365</button>
          </div>
        </div>
        <div className="search-section">
          <div className="search-bar">
            <input type="text" placeholder="검색어를 입력하세요" />
            <button className="search-btn">🔍</button>
          </div>
          <button className="department-btn">기관/학과</button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <a href="#about" className="nav-item">MJC소개</a>
        <a href="#faculty" className="nav-item">학부/학과안내</a>
        <a href="#academic" className="nav-item">학사서비스</a>
        <a href="#life" className="nav-item">생활서비스</a>
        <a href="#info" className="nav-item">정보서비스</a>
        <a href="#anniversary" className="nav-item">개교 50주년 기념</a>
      </nav>
    </header>
  );
};

export default Header; 