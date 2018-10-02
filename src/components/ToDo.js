import React, { Component } from 'react';

 class ToDo extends Component {
  render() {
     return (
      <form>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description } </span>
        <input type="button" value="Delete Item" onClick={ this.props.deleteTodo }/>
      </form>
     );
   }
 }
 
 export default ToDo;