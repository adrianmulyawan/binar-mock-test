import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getTodoSuccess, getTodoLoading, getTodoFailed, 
  deleteTodoSuccess, deleteTodoLoading, deleteTodoFailed,
  detailTodo
} from '../../redux/actions/todo.action';
import axios from 'axios';

const CardComponent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    getTodosLoading,
    getTodosFulfilled,
    getTodosRejected,
    removeTodoFulfilled
  } = useSelector((state) => state.todoReducer);

  const token = localStorage.getItem('token');
  let j = 0;
  useEffect(() => {
    let isMounted = true;
    if (j === 0) {
      const getTodoLists = async () => {
        try {
          if (isMounted) {
            dispatch(getTodoLoading(true));
          }

          const todos = await axios.get('https://cyan-crazy-mite.cyclic.app/api/v1/todo', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });

          const dataTodo = todos.data;
          // console.info(dataTodo.data, '=> data');

          if (isMounted) {
            dispatch(getTodoSuccess(dataTodo.data));
            dispatch(getTodoFailed(false));
          }
        } catch (error) {
          if (isMounted) {
            dispatch(getTodoFailed(error));
            navigate('/unauthorized');
            localStorage.removeItem('token');
            localStorage.removeItem('dataUser');
          }
        } finally {
          if (isMounted) {
            dispatch(getTodoLoading(false));
          }
        }
      }
      getTodoLists();
      j++;
    }
  }, [j, dispatch, token, navigate]);

  // console.info(getTodosFulfilled, '=> get todo fulfilled');
  // console.info(removeTodoFulfilled, '=> remove todo fulfilled');

  const handleDelete = async (event) => {
    const id = event.target.value;

    const confirmation = window.confirm('Are you sure delete this todo?');

    if (confirmation === true) {
      try {
        const todo = await axios.delete(`https://cyan-crazy-mite.cyclic.app/api/v1/todo/delete/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const dataTodo = todo.data;
        console.info(dataTodo, '=> data todo')

        dispatch(deleteTodoSuccess(dataTodo));
        dispatch(deleteTodoFailed(false));
        dispatch(deleteTodoLoading(false));

        alert('Success Delete Todo!');

        // > get todo again
        const todosAfterDelete = await axios.get('https://cyan-crazy-mite.cyclic.app/api/v1/todo', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const dataTodoAfterDelete = todosAfterDelete.data;
        dispatch(getTodoSuccess(dataTodoAfterDelete.data));
        dispatch(getTodoFailed(false));

      } catch (error) {
        dispatch(deleteTodoFailed(error));
        dispatch(deleteTodoLoading(false));
        navigate('/unauthorized');
        localStorage.removeItem('token');
        localStorage.removeItem('dataUser');
      } finally {
        dispatch(deleteTodoLoading(true));
      }
    }
  };

  let i = 0
  useEffect(() => {
    if (i === 0) {
      if (removeTodoFulfilled) {
        dispatch(getTodoSuccess());
      }
      i++;
    }
  }, [i, dispatch, removeTodoFulfilled]);

  // console.info(detailTodoFulfilled, '=> dapat');

  return (
    <>
      <div className="row">
        {/* Jika data masih loading */}
        {
          getTodosLoading && (
            <div className="col-lg-12 col-md-12 col-sm-12 mb-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Data Loading...
                  </h5>
                  <p className="card-text">
                    Please Wait...
                  </p>
                </div>
              </div>
            </div>
          )
        }

        {/* Jika data telah fulfilled */}
        {
          getTodosFulfilled && (
            getTodosFulfilled.map((data) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6 mb-2" key={ data.id }>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        { data.title }
                      </h5>
                      <p className="card-text">
                        { data.body }
                      </p>
                      <div className="button-action">
                        <button className='btn btn-success' onClick={ () => dispatch(detailTodo(data)) }>Edit</button>
                        <button className='btn btn-danger mx-2' value={ data.id } onClick={ handleDelete }>Delete</button>
                      </div>
                      </div>
                  </div>
                </div>
              );
            })
          )
        }

        {/* Kondisi Rejected */}
        {
          getTodosRejected && (
            <div className="col-lg-12 col-md-12 col-sm-12 mb-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {
                      getTodosRejected ? getTodosRejected : 'Data Not Found!'
                    }
                  </h5>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default CardComponent;
