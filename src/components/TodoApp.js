import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleNewTodo = this.handleNewTodo.bind(this)
  }

  handleNewTodo(e) {
    this.setState({ currentTodo: e.target.value })
  }


  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm
              currentTodo={this.state.currentTodo}
              handleNewTodo={this.handleNewTodo} />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}
