import React from 'react';
import './Sidebar.css';

function Sidebar({names = []}) {
  

  return (
    <aside className="sidebar">
      <button className="new-api-btn">NEW API</button>
      <ul className="api-list">
        {names.map((name, index) => (
          <li key={index} className="api-item">
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
