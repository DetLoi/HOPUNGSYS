// Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Breadcrumb.css';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li key={index} className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`}>
            {index === paths.length - 1 ? (
              path.text
            ) : (
              <Link to={path.url}>{path.text}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
