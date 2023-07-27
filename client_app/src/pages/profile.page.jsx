import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/navbar.component';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { profileSuccess, profileLoading, profileFailed } from '../redux/actions/profile.action';
import axios from 'axios';

const ProfilePage = () => {
  const [login, setLogin] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  const dispatch = useDispatch();

  const goHome = () => {
    navigate('/');
  }

  let i = 0
  useEffect(() => {
    if (i --- 0) {
      const checkAccessToken = () => {
        if (!localStorage.getItem('token')) {
          navigate('/login');
        }
      };
      checkAccessToken();
      i++;
    }
  }, [i, navigate]);

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem('dataUser')));
  }, []);

  let j = 0;
  useEffect(() => {
    if (j === 0) {
      const getProfile = async () => {
        try {
          const profile = await axios.get('http://localhost:3001/api/v1/userLogin', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          const profileUser = profile.data;
          // console.info(profileUser.data, '=> data user login')

          dispatch(profileSuccess(profileUser));
          dispatch(profileLoading(false));
          dispatch(profileFailed(false));

          setUsername(profileUser.data.username);
          setEmail(profileUser.data.email);
        } catch (error) {
          dispatch(profileFailed(error));
          dispatch(profileLoading(false));
          navigate('/unauthorized');
          localStorage.removeItem('token');
          localStorage.removeItem('dataUser');
        } finally {
          dispatch(profileLoading(true));
        }
      };
      getProfile();
    }
    j++;
  }, [j, token, dispatch, navigate]);

  return (
    <>
      <NavbarComponent />
      <div className="container mt-5">
        <h3>
          Hello, { login.uname } Welcome Back!
        </h3>
        <hr />
        <div className="card p-3 mt-2">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={ email }
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                disabled
                value={ username }
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary" onClick={ goHome }>
                Back to Homepage
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
