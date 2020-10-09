import React from 'react';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo.js';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: []
    };
  }

  render(){
    return (
      <div>
        <AddTodo addTodoFn = {this.addTodo}></AddTodo>
        <TodoList updateTodoFn = {this.updateTodo} todos = {this.state.todos}></TodoList>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos)
    {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    }
    else
    {
      console.log('no todos');
    }
  }

  addTodo = async (todo) => {
    await this.setState({ todos : [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }

  updateTodo = (todo) => {
    const newTodo = this.state.todos.map(_todo => {
      if(todo === _todo)
      {
        return {
          text: todo.text,
          completed: !todo.completed
        }
      }
      else
        return _todo
    });
    this.setState({ todos: newTodo})
  }

}

export default App;
