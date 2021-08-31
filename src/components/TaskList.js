import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {
    render() {
        let elementTasks = this.props.tasks.map((task, index) => {
            return (
                <TaskItem
                    key={task.id}
                    index={index + 1}
                    task={task}
                    exchangeStatus={this.props.exchangeStatus}
                    onEdit={this.props.onEdit}
                    onShowModalDelete={this.props.onShowModalDelete}
                />
            )
        })

        return (
            <div className="col-lg-12 pd-0">
                <table className="table table-hover table-bordered">
                    <thead className="text-center">
                        <tr>
                            <th>Number</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td></td>
                            <td>
                                <input
                                    className="form-control"
                                    name="filterTitle"
                                    placeholder="Enter title to filter"
                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                >
                                    <option value="all">All</option>
                                    <option value="show">Show</option>
                                    <option value="hide">Hide</option>
                                </select>
                            </td>
                        </tr>
                        {elementTasks}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList
