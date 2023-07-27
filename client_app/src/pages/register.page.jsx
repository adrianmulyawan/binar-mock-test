import React, { useEffect, useState } from 'react';
import NavbarAuthComponent from '../components/navbar-auth.component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; 
import { registerSuccess, registerLoading, registerFailed } from '../redux/actions/auth.action';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  let i = 0
  useEffect(() => {
    if (i --- 0) {
      const checkAccessToken = () => {
        if (localStorage.getItem('token')) {
          navigate('/');
        }
      };
      checkAccessToken();
      i++;
    }
  }, [i, navigate]);

  // > dispatch dan selector (redux)
  const dispatch = useDispatch();
  const {
    registerUserRejected,
    registerUserLoading
  } = useSelector((state) => state.authReducer);

  const goLogin = () => {
    navigate('/login');
  }

  const handleLoginForm = async (event) => {
    event.preventDefault();

    const dataRegister = {
      username, email, password
    };

    if (!username || !email || !password) {
      return alert("Username, Email, and Password can't be Empty!")
    }

    try {
      // > Login Process
      const response = await axios.post('http://localhost:3001/api/v1/register', dataRegister);
      const responseRegister = response.data;

      console.info(responseRegister, '=> login data');

      dispatch(registerSuccess(dataRegister));
      dispatch(registerFailed(false));
      dispatch(registerLoading(false));

      setUsername('');
      setEmail('');
      setPassword('');

      alert('Register Success');

      navigate('/login');
    } catch (error) {
      dispatch(registerFailed(error));
      dispatch(registerLoading(false));
    } finally {
      dispatch(registerLoading(true));
    }
  }

  return (
    <>
      <NavbarAuthComponent />
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80"
                      alt="Gambar"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem"
                      }}
                    />
                  </div>
                  <div className="col-xl-6 justify-content-center align-items-center">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase text-center">
                        Register
                      </h3>
                      {
                        registerUserRejected  ? (
                          <div className="alert alert-danger" role="alert">
                            <p>Check Again Username, Email, or Password</p>
                          </div>
                        ) : ""
                      }
                      <form onSubmit={ handleLoginForm }> 
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email Address
                            </label>
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Your Email Address"
                              onChange={ (e) => setEmail(e.target.value) }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Your Username"
                            onChange={ (e) => setUsername(e.target.value) }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Your Password"
                            onChange={ (e) => setPassword(e.target.value) }
                          />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button type="submit" className="btn btn-primary">
                            {
                              registerUserLoading ? 'Register on Process...' : 'Register'
                            }
                          </button>
                          <button
                            className="btn btn-success"
                            onClick={ goLogin }
                            target="__blank"
                          >
                            Login to Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
