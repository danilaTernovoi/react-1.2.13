import React, { Component } from "react"

class Task extends Component {
  render() {
    const { desc, created, mod } = this.props.task

    return (
      <li className={mod}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={mod === "completed"}
          />
          <label>
            <span className="description">{desc}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {mod === "editing" && (
          <input type="text" className="edit" value="Editing task" />
        )}
      </li>
    )
  }
}

export default Task
