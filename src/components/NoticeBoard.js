import React, { useState } from 'react';
import './NoticeBoard.css';

const categories = ['공지사항', '학사공지', '장학공지', '홍보게시판', '채용공지'];

const notices = [
  {
    date: '2025-07-25',
    title: '정보시스템 재난방지 모의훈련에 따른 인터넷 및 웹 서비스 중단 안내',
    isNew: true,
  },
  {
    date: '2025-07-23',
    title: '2025학년도 2학기 생활관생 “신청일” 변경 안내',
    isNew: true,
  },
  {
    date: '2025-07-21',
    title: '웹메일 프로그램 버전업에 따른 서비스 중단 안내',
    isNew: true,
  },
  {
    date: '2025-07-18',
    title: '2025학년도 2학기 생활관생 모집 및 선발 안내',
    isNew: true,
  },
  {
    date: '2025-07-11',
    title: '[홍보] 서대문구청 2025년 서대문구 대학생 자원봉사단 모집 홍보 안내',
    isNew: true,
  },
  {
    date: '2025-07-04',
    title: '[강사초빙] 2025. 9. 1.자 명지전문대학 강사 공개채용 공고',
    isNew: true,
  }
];

const NoticeBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState('공지사항');

  return (
    <div className="notice-board">
      <div className="notice-sidebar">
        <h2>공지사항</h2>
        <a href="#" className="more-link">더보기</a>
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${cat === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="notice-list">
        {notices.map((notice, index) => (
          <div className="notice-card" key={index}>
            <div className="notice-date">{notice.date}</div>
            <div className="notice-title">
              {notice.title}
              {notice.isNew && <span className="new-badge">N</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
