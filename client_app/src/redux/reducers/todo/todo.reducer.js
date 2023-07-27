import {
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_FAILED,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  ADD_NEW_TODO_LOADING,
  ADD_NEW_TODO_SUCCESS,
  ADD_NEW_TODO_FAILED,
  DETAIL_TODO,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED
} from '../../actions/todo.action'

const initialState = {
  getTodosLoading: false,
  getTodosFulfilled: false,
  getTodosRejected: false,

  removeTodoLoading: false,
  removeTodoFulfilled: false,
  removeTodoRejected: false,

  insertTodoLoading: false,
  insertTodoFulfilled: false,
  insertTodoRejected: false,

  detailTodoFulfilled: false,

  updateTodoLoading: false,
  updateTodoFulfilled: false,
  updateTodoRejected: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LOADING: 
      return {
        ...state,
        getTodosLoading: action.payload
      }
    case GET_TODO_SUCCESS:
      return {
        ...state,
        getTodosFulfilled: action.payload
      }
    case GET_TODO_FAILED:
      return {
        ...state,
        getTodosRejected: action.payload
      }
    case DELETE_TODO_LOADING:
      return {
        ...state,
        removeTodoLoading: action.payload
      }
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        removeTodoFulfilled: action.payload
      }
    case DELETE_TODO_FAILED:
      return {
        ...state,
        removeTodoRejected: action.payload
      }
    case ADD_NEW_TODO_LOADING: 
      return {
        ...state,
        insertTodoLoading: action.payload
      }
    case ADD_NEW_TODO_SUCCESS: 
      return {
        ...state,
        insertTodoFulfilled: action.payload
      }
    case ADD_NEW_TODO_FAILED: 
      return {
        ...state,
        insertTodoRejected: action.payload
      }
    case DETAIL_TODO: 
      return {
        ...state,
        detailTodoFulfilled: action.payload,
      };
    case UPDATE_TODO_LOADING: 
      return {
        ...state,
        updateTodoLoading: action.payload,
      };
    case UPDATE_TODO_SUCCESS: 
      return {
        ...state,
        updateTodoFulfilled: action.payload,
      };
    case UPDATE_TODO_FAILED: 
      return {
        ...state,
        updateTodoRejected: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;