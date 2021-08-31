import React, { Component } from 'react'

class TaskItem extends Component {
    onDelete = (e) => {
        console.log(2321232123)
    }

    render() {
        let { task, index, onShowModalDelete } = this.props

        return (
            <tr>
                <td className="text-center">{index}</td>
                <td>{task.title}</td>
                <td className="text-center">
                    <span
                        className={
                            task.status === 'show'
                                ? 'label-success interactable'
                                : 'label-danger interactable'
                        }
                        onClick={() => this.props.exchangeStatus(task.id)}
                    >
                        {task.status}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        className="btn btn-warning mr-2"
                        onClick={() => this.props.onEdit(task.id)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger ml-2"
                        data-toggle="modal"
                        data-target="#deleteTaskModal"
                        onClick={() => onShowModalDelete(task.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default TaskItem
