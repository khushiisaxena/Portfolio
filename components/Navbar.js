import React, { useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-primary">
      <div className="container">
        <Link href="/">
          <a className="text-light navbar-brand fade-in">
            <span>{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse slide-in-top`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) => (
              <Link key={index} href={value.link}>
                <a className="text-light nav-link nav-item-animate">{value.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};