import React, { Component } from 'react';

 class ToDo extends Component {
  render() {
     return (
      <form>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description } </span>
        <button onClick={ this.props.deleteTodo }>delete</button>
      </form>
     );
   }
 }
 
 export default ToDo;