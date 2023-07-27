import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewTodoLoading, addNewTodoSuccess, addNewTodoFailed, 
  getTodoSuccess, getTodoFailed, getTodoLoading,
  updateTodoLoading, updateTodoSuccess, updateTodoFailed
} from '../../redux/actions/todo.action';
import axios from 'axios';

const FormComponent = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [id, setId] = useState('');

  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  const data = {
    title, body
  };

  const { insertTodoFulfilled, detailTodoFulfilled, updateTodoFulfilled } = useSelector((state) => state.todoReducer);

  const handleInputTodo = async (event) => {
    event.preventDefault();

    if (id) {
      try {
        const todo = await axios.put(`http://localhost:3001/api/v1/todo/edit/${id}`, data, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const dataTodo = todo.data;
        // console.info(dataTodo, '=> data todo');
  
        dispatch(updateTodoSuccess(dataTodo));
        dispatch(updateTodoLoading(false));
        dispatch(updateTodoFailed(false));
  
        alert('Success Edit Todo!');
  
        // > get data lagi
        const todosAfterInsert = await axios.get('http://localhost:3001/api/v1/todo', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
  
          const dataTodoAfterDelete = todosAfterInsert.data;
          dispatch(getTodoSuccess(dataTodoAfterDelete.data));
          dispatch(getTodoFailed(false));
          dispatch(getTodoLoading(false));
  
      } catch (error) {
        dispatch(updateTodoFailed(error));
        dispatch(updateTodoLoading(false));
        navigate('/unauthorized');
        localStorage.removeItem('token');
        localStorage.removeItem('dataUser');
      } finally {
        dispatch(updateTodoLoading(true));
      }
    } else {
      try {
        const todo = await axios.post('http://localhost:3001/api/v1/todo', data, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const dataTodo = todo.data;
        console.info(dataTodo, '=> data todo')
  
        dispatch(addNewTodoSuccess(dataTodo));
        dispatch(addNewTodoLoading(false));
        dispatch(addNewTodoFailed(false));
  
        alert('Success Add Todo!');
  
        // > get data lagi
        const todosAfterInsert = await axios.get('http://localhost:3001/api/v1/todo', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
  
          const dataTodoAfterDelete = todosAfterInsert.data;
          dispatch(getTodoSuccess(dataTodoAfterDelete.data));
          dispatch(getTodoFailed(false));
          dispatch(getTodoLoading(false));
  
      } catch (error) {
        dispatch(addNewTodoFailed(error));
        dispatch(addNewTodoLoading(false));
        navigate('/unauthorized');
        localStorage.removeItem('token');
        localStorage.removeItem('dataUser');
      } finally {
        dispatch(addNewTodoLoading(true));
      }
    }

    setId('')
    setTitle('');
    setBody('');
  }

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      if (insertTodoFulfilled || updateTodoFulfilled) {
        dispatch(getTodoSuccess());
      }
      i++
    }
  }, [insertTodoFulfilled, updateTodoFulfilled, dispatch, i]);

  let j = 0;
  useEffect(() => {
    if (j === 0) {
      if (detailTodoFulfilled) {
        // console.info(detailTodoFulfilled, 'Detail data todo');
        // => update statenya
        setId(detailTodoFulfilled.id);
        setTitle(detailTodoFulfilled.title);
        setBody(detailTodoFulfilled.body);
      }
      j++;
    }
  }, [j, detailTodoFulfilled]);

  return (
    <>
      <h2>
        {
          id ? 'Update Todo List' : 'Add Todo List'
        }
      </h2>
      <hr />
      <div className="card p-3 my-2">
        <form onSubmit={ handleInputTodo }>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' placeholder='Your Todo Title' onChange={ (e) => setTitle(e.target.value) } value={ title } required />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Description Todo</label>
            <input type="text" className="form-control" id="body" name='body' placeholder='Your Description Todo' onChange={ (e) => setBody(e.target.value) } value={ body } required />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              {
                id ? 'Update Todo' : 'Insert Todo'
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
