import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './action';

class TodoList extends Component {
  keyPressHandler = (title) => {
    this.props.deleteTodo(title);
  }

  toggleTodo = title => {
    this.props.toggleTodo(title);
  }

  render() {
    return <div>
      <ul>
        {this.props.todos.map(todo =>
          <li onClick={() => this.toggleTodo(todo.title)}>
            {todo.title} | {todo.done ? 'done' : 'not done'}
            <button onClick={() => this.keyPressHandler(todo.title)}>x</button>
          </li>)}
      </ul>
    </div>
  }
}

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      done: false
    }
    this.keyPressHandler.bind(this);
    this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    console.log('Clicked');
    this.props.addTodo({
      title: this.state.todo,
      done: this.state.done
    });
    this.setState({
      todo: ''
    })
  }

  keyPressHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({ todo: e.target.value })
  }

  render() {
    return (
      <>
        <input value={this.state.todo} onChange={this.keyPressHandler} type='text' />
        <button onClick={this.onClickHandler}> Submit </button>
      </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <TodoForm addTodo={this.props.addTodo} />
        <TodoList todos={this.props.todos}
          deleteTodo={this.props.deleteTodo}
          toggleTodo={this.props.toggleTodo}
        />
      </>
    )
  }
}

// takes the state variable and presents as props to App
const mapStateToProps = state => {
  console.log(state);
  return { todos: state.todos };
}

// connect responsible for mapping state, actions as props
export default connect(mapStateToProps,
  { addTodo, deleteTodo, toggleTodo })(App);
