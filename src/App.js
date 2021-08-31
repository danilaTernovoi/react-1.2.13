import React, { Component } from "react"
import NewTaskForm from "./components/NewTaskForm"
import TaskList from "./components/TaskList"
import Footer from "./components/Footer"

class App extends Component {
  state = {
    tasks: [
      {
        desc: "Active",
        created: "created 17 seconds ago",
        mod: "active",
      },

      {
        desc: "Completed",
        created: "created 17 seconds ago",
        mod: "completed",
      },

      {
        desc: "Editing",
        created: "created 17 seconds ago",
        mod: "editing",
      },
    ],
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>

        <section className="main">
          <TaskList list={this.state.tasks} />
          <Footer />
        </section>
      </section>
    )
  }
}

export default App
