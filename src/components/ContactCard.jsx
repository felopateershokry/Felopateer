import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

const contacts = [
  { label: 'Email',    value: 'felopateer@email.com' },
  { label: 'LinkedIn', value: '/in/felopateer-shokry' },
  { label: 'GitHub',   value: '/felopateer' },
  { label: 'Location', value: 'Alexandria, Egypt' },
];

export default function ContactCard() {

  const navigation = useNavigate();
  return (
    <div
      className="card col-6"
      id="contact"
      onClick={() => navigation("/contact")}
    >
      <div className="card-tag">Contact</div>
      <h2>
        Let's Work
        <br />
        <em>Together</em>
      </h2>
      <p>Open to internships, collaborations, and freelance opportunities.</p>

      <div className="contact-grid">
        {contacts.map((c) => (
          <div className="c-item" key={c.label}>
            <span className="c-label">{c.label}</span>
            {c.value}
          </div>
        ))}
      </div>
    </div>
  );
}
