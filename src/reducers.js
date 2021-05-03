import { combineReducers } from 'redux';

const todoReducer = (todo = [], action) => {
  console.log(action)
  if (action.type === 'ADD_TODO')
    return [...todo, action.payload]
  else if (action.type === 'DELETE_TODO') {
    let newTodo = todo.filter(r => r.title != action.payload);
    return newTodo;
  }
  return todo;
};

export default combineReducers({
  todos: todoReducer,
});
