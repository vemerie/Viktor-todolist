import React from 'react'

class Todo extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          todo: []
        };
      }
handleChange=()=>{
    this.setState({term: event.target.value});
}
handleSubmit=()=>{
    event.preventDefault()
    this.setState({
      term: '',
      todo: [...this.state.todo, this.state.term]
    });

}

  render() {
    return <div>
        <h2>Todo App</h2>
    <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        value={this.state.term}
        onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
        </form>
        <List todo={this.state.todo}/>
        </div>
  }
}

export default Todo

const List = props => (
    <ul>
      {
        props.todo.map((todo, index) => <li key={index}>{todo}</li>)
      }
    </ul>
  );