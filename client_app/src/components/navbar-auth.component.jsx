import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarAuthComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href='/' onClick={ goHome }>
            <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <span style={{ marginLeft: '10px' }}>Adrian Mulyawan</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={ () => goHome }>
                <button className="nav-link" onClick={ goHome }>Home</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAuthComponent;
