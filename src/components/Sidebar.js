import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">MYONGJI FOCUS</h3>
        <div className="focus-cards">
          <div className="focus-card">
            <div className="card-icon">🏢</div>
            <div className="card-text">대학생활안내</div>
            <div className="card-arrow">→</div>
          </div>
          <div className="focus-card">
            <div className="card-icon">💬</div>
            <div className="card-text">글로벌 어학.회화 프로그램</div>
            <div className="card-arrow">→</div>
          </div>
          <div className="focus-card">
            <div className="card-icon">📋</div>
            <div className="card-text">[필수검사]2025-1 상담센터 종합심리검사 실시모집안내</div>
            <div className="card-arrow">→</div>
          </div>
        </div>
        <div className="sidebar-watermark">
          <div className="watermark-icon">🌳</div>
          <div className="watermark-text">명지전문대학 COLLEGE</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 