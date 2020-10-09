import React from 'react';

class AddTodo extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: ''
    }
  }
  render(){
    return(
      <div className="add-todo-container">
        <form onSubmit = {(e) => this.submitTodo(e)}>
          <input id = 'addTodoInput' type="text" name="task" onChange = {(e) => this.updateInput(e)} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

  updateInput = (e) => {
    this.setState({ todo : e.target.value});
  }
  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
    document.getElementById('addTodoInput').value = '';
    // console.log(this.state);
  }
}

export default AddTodo;
