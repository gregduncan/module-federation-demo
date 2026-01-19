import { Link } from 'react-router-dom';

import SignIn from './sign-in';

const Header = () => {
  return (
    <header
      style={{
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg
                fill="none"
                height="32"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                style={{ color: '#4299e1' }}
                viewBox="0 0 24 24"
                width="32"
              >
                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
              </svg>
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                ThreadTales
              </span>
            </div>
          </Link>
          <nav>
            <ul
              style={{
                display: 'flex',
                gap: '2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: '#4a5568',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogue"
                  style={{
                    textDecoration: 'none',
                    color: '#4a5568',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <SignIn />
              </li>
            </ul>
          </nav>
        </div>

        <div
          style={{
            fontStyle: 'italic',
            color: '#718096',
            fontFamily: "'Playfair Display', serif",
            maxWidth: '400px',
            textAlign: 'right',
          }}
        >
          "Life is too short to wear boring clothes!"
        </div>
      </div>
    </header>
  );
};

export default Header;
