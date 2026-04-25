import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

export default function StatCard() {

  const navigation = useNavigate();

  return (
    <div className="card card-stat col-5" onClick={() => navigation("/about")}>
      <div className="card-num">No. 01</div>

      <div className="stat-n">4+</div>
      <div className="stat-desc">Years building on the web</div>

      <div className="stat-divider">
        <div className="stat-n stat-n--sm">MERN</div>
        <div className="stat-desc">Certified stack</div>
      </div>
    </div>
  );
}
