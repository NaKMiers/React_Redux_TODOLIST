import React, { Component } from 'react'

class TaskButton extends Component {
    render() {
        return (
            <div className="mt-3 mb-3">
                <button
                    type="button"
                    className="btn btn-success mr-2"
                    onClick={this.props.onCancel}
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add Word
                </button>
            </div>
        )
    }
}

export default TaskButton
