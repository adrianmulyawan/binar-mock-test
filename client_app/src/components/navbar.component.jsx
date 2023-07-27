import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerLoading, loginLoading } from '../redux/actions/auth.action';
import { profileSuccess, profileLoading, profileFailed } from '../redux/actions/profile.action';

const NavbarComponent = () => {
  const [login, setLogin] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem('dataUser')));
  }, []);
  // console.info(login, '=> login bray')

  const goHome = () => {
    navigate('/')
  };

  const goLogin = () => {
    navigate('/login');
  }

  const goRegister = () => {
    navigate('/register');
  }

  const goProfile = () => {
    navigate('/profile');
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('dataUser');
    dispatch(registerLoading(false));
    dispatch(loginLoading(false));
    dispatch(profileSuccess(false));
    dispatch(profileLoading(false));
    dispatch(profileFailed(false));
    navigate('/login');
  };

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
              <li className="nav-item">
                <button className="nav-link" onClick={ goHome }>Home</button>
              </li>
              <li className="nav-item">
                {
                  login ? (
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        { login.uname }
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><button className="nav-link" onClick={ goProfile } style={{ fontSize: '18px' }}>Profile</button></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <button
                            className="nav-link"
                            style={{ fontSize: '18px' }}
                            onClick={ handleLogout }
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <>
                      <button onClick={ goLogin } className="btn btn-md mx-2 my-3 btn-outline-primary">
                        <b className="px-2 py-4">Login</b>
                      </button>
                      <button onClick={ goRegister } className="btn btn-md mx-2 my-3 btn-outline-primary">
                        <b className="px-2 py-4">Register Account</b>
                      </button>
                    </>  
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
