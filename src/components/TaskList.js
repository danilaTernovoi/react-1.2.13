import React, { Component, Fragment } from "react"
import Task from "./Task"

class TaskList extends Component {
  render() {
    const { list } = this.props

    return (
      <ul className="todo-list">
        {list.map((task) => {
          return (
            <Fragment key={task.desc}>
              <Task task={task} />
            </Fragment>
          )
        })}
      </ul>
    )
  }
}

export default TaskList
