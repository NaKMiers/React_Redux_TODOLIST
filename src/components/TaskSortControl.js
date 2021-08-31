import React, { Component } from 'react'

class TaskSortControl extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Sort
                        <i className="fas fa-angle-down ml-2"></i>
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <button className="dropdown-item">
                            <i className="fas fa-sort-alpha-down mr-2"></i>
                            Ascending
                            <i className="fas fa-check ml-2"></i>
                        </button>
                        <button className="dropdown-item border-bottom">
                            <i className="fas fa-sort-alpha-down-alt mr-2"></i>
                            Descending
                        </button>
                        <button className="dropdown-item border-top">
                            <i className="fas fa-eye mr-2"></i>
                            Show
                        </button>
                        <button className="dropdown-item">
                            <i className="fas fa-eye-slash mr-2"></i>
                            Hide
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskSortControl
