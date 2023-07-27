import React, { useEffect, useState } from 'react';
import NavbarAuthComponent from '../components/navbar-auth.component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; 
import { loginSuccess, loginLoading, loginFailed } from '../redux/actions/auth.action';

const LoginPage = () => {
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
    loginUserRejected,
    loginUserLoading
  } = useSelector((state) => state.authReducer);

  const goRegister = () => {
    navigate('/register');
  }

  const handleLoginForm = async (event) => {
    event.preventDefault();

    const dataLogin = {
      username, password
    };

    if (!username || !password) {
      return alert("Username and Password can't be Empty!")
    }

    try {
      // > Login Process
      const response = await axios.post('https://cyan-crazy-mite.cyclic.app/api/v1/login', dataLogin);
      const responseLogin = response.data;

      // console.info(responseLogin, '=> login data');

      // > Ambil data token, username, dan email
      const token = responseLogin.token;
      const uname =  responseLogin.user.username;
      const email = responseLogin.user.email;

      // console.info(token, uname, email, '=> data');

      // > Set Local Storage
      const jsonUserData = {
        uname,
        email
      };
      localStorage.setItem('token', token);
      localStorage.setItem('dataUser', JSON.stringify(jsonUserData));

      dispatch(loginSuccess(dataLogin));
      dispatch(loginFailed(false));
      dispatch(loginLoading(false));

      setUsername('');
      setPassword('');

      navigate('/');
    } catch (error) {
      dispatch(loginFailed(error));
      dispatch(loginLoading(false));
    } finally {
      dispatch(loginLoading(true));
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
                        Login
                      </h3>
                      {
                        loginUserRejected  ? (
                          <div className="alert alert-danger" role="alert">
                            <p>Check Again Username or Password</p>
                          </div>
                        ) : ""
                      }
                      <form onSubmit={ handleLoginForm }> 
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
                              loginUserLoading ? 'Login on Process...' : 'Login Now'
                            }
                          </button>
                          <button
                            className="btn btn-success"
                            onClick={ goRegister }
                            target="__blank"
                          >
                            Dont Have Account? Signup Here
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

export default LoginPage;
