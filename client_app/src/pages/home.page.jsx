import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/navbar.component';
import CardComponent from '../components/todo/card.component';
import FormComponent from '../components/todo/form.component';

const HomePage = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <FormComponent />
        <h2>Todo List</h2>
        <hr />
        <CardComponent />
      </div>
    </>
  );
}

export default HomePage;
