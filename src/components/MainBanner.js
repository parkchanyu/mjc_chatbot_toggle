import React from 'react';
import './MainBanner.css';

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="banner-content">
        <div className="banner-image">
          {/* 실제 이미지 대신 배경색과 텍스트로 표현 */}
          <div className="banner-overlay">
            <div className="banner-text">
              <h1 className="banner-title">
                [지역혁신중심 대학지원체계(RISE) 확대를 위한 업무 협약 체결]
              </h1>
              <h2 className="banner-subtitle">
                명지전문대학-서대문구청-서대문50플러스센터
              </h2>
              <div className="banner-details">
                <p>□ 일시: 2025.03.20.(목) 10:30</p>
                <p>□ 장소: 명지전문대학 대회의실</p>
              </div>
              <div className="banner-logos">
                <div className="logo-item">명지전문대학</div>
                <div className="logo-item">서대문구</div>
                <div className="logo-item">50+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-controls">
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="slider-controls">
            <button className="play-pause">⏸</button>
            <button className="next">▶</button>
          </div>
          <div className="banner-brand">MYONGJI COLLEGE</div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner; 