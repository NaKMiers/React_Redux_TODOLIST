import React, { Component } from 'react'

class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            status: 'show',
            errors: [],
        }
    }

    componentDidMount() {
        let { taskEditing } = this.props
        if (taskEditing) {
            this.setState({ ...taskEditing })
        }
    }

    onChange = (e) => {
        let t = e.target
        let key = t.name
        let value = t.value
        this.setState({ [key]: value })
    }

    onCancel = (e) => {}

    onSubmit = async function (e) {
        e.preventDefault()
        let { taskEditing } = this.props
        if (this.state.title.trim() === '') {
            this.state.errors.push('❌Nothing here. Please enter something!❌')
            this.setState({ errors: this.state.errors })
        }

        if (taskEditing) {
            this.props.onSubmit(this.state, taskEditing.id)
        } else {
            this.props.onSubmit(this.state)
        }
        this.onClear()
    }

    render() {
        let { taskEditing } = this.props

        return (
            <div className="border border-warning task-form round-small pd-0">
                <h2 className="form-heading">
                    {taskEditing ? 'Edit Task' : 'Add Word'}
                    <i
                        className="fas fa-backspace close-form-btn interactable"
                        onClick={() => this.props.onToggleForm()}
                    ></i>
                </h2>
                <form className="container" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title" className="label interactable">
                            Title
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter new word"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                        <span className="error-message">
                            {this.props.errorsForm[0]}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="label interactable">
                            Status
                        </label>
                        <select
                            className="form-control"
                            name="status"
                            id="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value="show">Show</option>
                            <option value="hide">Hide</option>
                        </select>
                    </div>
                    <div className="text-center mb-3">
                        <button
                            type="submit"
                            className="btn btn-warning mr-2 text-white"
                        >
                            {taskEditing ? 'Save' : 'Add'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary ml-2"
                            onClick={
                                taskEditing ? this.props.onCancel : this.onClear
                            }
                        >
                            {taskEditing ? 'Cancel' : 'CLear'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskForm
