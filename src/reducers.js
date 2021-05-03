import { combineReducers } from 'redux';

const todoReducer = (todo = [], action) => {
  // add a todo without mutating previous array
  if (action.type === 'ADD_TODO')
    return [...todo, action.payload]
  // removes a todo without mutating previous array
  else if (action.type === 'DELETE_TODO') {
    let newTodo = todo.filter(r => r.title != action.payload);
    return newTodo;
  }
  // toggle a todo without mutating previous array
  else if (action.type === 'TOGGLE_TODO') {
    let newTodo = todo.map(item => {
      if (item.title === action.payload)
        return { title: item.title, done: !item.done };
      return { title: item.title, done: item.done };
    })
    return newTodo;
  }
  return todo;
};

export default combineReducers({
  todos: todoReducer,
});
