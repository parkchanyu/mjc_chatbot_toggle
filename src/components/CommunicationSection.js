import React from 'react';
import './CommunicationSection.css';

const communicationItems = [
  {
    title: 'M.I.F (Myongji Innovation Forum)',
    description: '의견 개진사항 접수',
    imageUrl: '/images/_.jpeg', // 실제 이미지 경로로 교체 필요
    link: '#',
  },
  {
    title: 'MJC e-열린광장',
    description: '문의 사항 해결',
    imageUrl: '/images/_.jpeg', // 실제 이미지 경로로 교체 필요
    link: '#',
  },
];

const CommunicationSection = () => {
  return (
    <section className="communication-section">
      <h2 className="communication-title">COMMUNICATION</h2>
      <div className="communication-container">
        {communicationItems.map((item, index) => (
          <div
            key={index}
            className="communication-card"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="go-btn">바로가기</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunicationSection;
