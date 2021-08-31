import React, { Component } from 'react'

class TaskSearchControl extends Component {
    render() {
        return (
            <div className="col-lg-6 pd-0">
                <div className="input-group">
                    <input className="form-control" placeholder="Search" />
                    <span className="">
                        <button className="btn btn-primary">
                            <i className="fas fa-search"></i>
                            Go
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default TaskSearchControl
