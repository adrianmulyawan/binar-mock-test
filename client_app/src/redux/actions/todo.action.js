export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILED = "GET_TODO_FAILED";
export const DELETE_TODO_LOADING = "DELETE_TODO_LOADING";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";
export const ADD_NEW_TODO_LOADING = "ADD_NEW_TODO_LOADING";
export const ADD_NEW_TODO_SUCCESS = "ADD_NEW_TODO_SUCCESS";
export const ADD_NEW_TODO_FAILED = "ADD_NEW_TODO_FAILED";
export const DETAIL_TODO = "DETAIL_TODO";
export const UPDATE_TODO_LOADING = "UPDATE_TODO_LOADING";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILED = "UPDATE_TODO_FAILED";

export const getTodoLoading = (data) => {
  return {
    type: GET_TODO_LOADING,
    payload: data
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data
  };
};

export const getTodoFailed = (data) => {
  return {
    type: GET_TODO_FAILED,
    payload: data
  };
};

export const deleteTodoLoading = (data) => {
  return {
    type: DELETE_TODO_LOADING,
    payload: data
  };
};

export const deleteTodoSuccess = (data) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: data
  };
};

export const deleteTodoFailed = (data) => {
  return {
    type: DELETE_TODO_FAILED,
    payload: data
  };
};

export const addNewTodoLoading = (data) => {
  return {
    type: ADD_NEW_TODO_LOADING,
    payload: data
  };
};

export const addNewTodoSuccess = (data) => {
  return {
    type: ADD_NEW_TODO_SUCCESS,
    payload: data
  };
};

export const addNewTodoFailed = (data) => {
  return {
    type: ADD_NEW_TODO_FAILED,
    payload: data
  };
};

export const detailTodo = (data) => {
  return {
    type: DETAIL_TODO,
    payload: data
  };
};

export const updateTodoLoading = (data) => {
  return {
    type: UPDATE_TODO_LOADING,
    payload: data
  };
};

export const updateTodoSuccess = (data) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: data
  };
};

export const updateTodoFailed = (data) => {
  return {
    type: UPDATE_TODO_FAILED,
    payload: data
  };
};