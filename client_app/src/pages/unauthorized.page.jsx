import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/login');
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">401</h1>
          <p className="fs-3"> <span className="text-danger">Opps!</span> Unauthorized.</p>
          <p className="lead">
              You don't have access in this page!
            </p>
          <button onClick={ goHome } className="btn btn-primary">Go Home</button>
        </div>
      </div>
    </>
  );
}

export default UnauthorizedPage;
