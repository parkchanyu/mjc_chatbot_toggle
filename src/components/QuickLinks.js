import React from 'react';
import './QuickLinks.css';

const QuickLinks = () => {
  const quickLinks = [
    { icon: '📚', label: '수강신청시스템' },
    { icon: '💻', label: '원격강좌/' },
    { icon: '🏢', label: 'I-CAMPUS' },
    { icon: '✉️', label: '웹메일' },
    { icon: '🖥️', label: '역량기반' },
    { icon: '🔍', label: '실시간' },
    { icon: '📖', label: '도서관' },
    { icon: '💭', label: '교수·학습지원' },
    { icon: '⚙️', label: '학생역량' },
    { icon: '🖨️', label: '인터넷' }
  ];

  return (
    <div className="quick-links">
      <div className="quick-links-header">
        <div className="user-tabs">
          <span className="tab active">재학생</span>
          <span className="tab-separator">•</span>
          <span className="tab">수험생</span>
          <span className="tab-separator">•</span>
          <span className="tab">교직원</span>
        </div>
      </div>
      <div className="quick-links-content">
        <button className="scroll-btn left">‹</button>
        <div className="links-container">
          {quickLinks.map((link, index) => (
            <div key={index} className="quick-link-item">
              <div className="link-icon">{link.icon}</div>
              <div className="link-label">{link.label}</div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right">›</button>
      </div>
    </div>
  );
};

export default QuickLinks; 