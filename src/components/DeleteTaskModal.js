import React, { Component } from 'react'

class DeleteTaskModal extends Component {
    render() {
        return (
            <div className="modal fade" id="deleteTaskModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete Task
                            </h5>
                            <button className="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Do you still want to delete this task?
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() =>
                                    this.props.onDelete(
                                        this.props.taskWillDelete
                                            ? this.props.taskWillDelete
                                            : undefined,
                                    )
                                }
                            >
                                Delete
                            </button>
                            <button
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteTaskModal
