import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class TaskForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         title: '',
         status: 'show',
         errors: [],
         createdAt: new Date()
      }
   }

   componentDidMount() {
      let { taskEditing } = this.props
      console.log(taskEditing)
      if (taskEditing.id) {
         this.setState({ ...taskEditing })
      }
   }

   UNSAFE_componentWillReceiveProps() {
      let { taskEditing } = this.props
      console.log(taskEditing)
      if (taskEditing.id) {
         this.setState({ ...taskEditing })
      }
   }

   onChange = e => {
      let t = e.target
      let key = t.name
      let value = t.value
      this.setState({ [key]: value, createdAt: new Date() })
   }

   onSubmit = async function (e) {
      e.preventDefault()
      let { taskEditing } = this.props
      if (this.state.title.trim() === '') {
         this.state.errors = []
         this.state.errors.push('❌Nothing here. Please enter something!❌')
         this.setState({ errors: this.state.errors })
      } else {
         if (taskEditing.id) {
            this.props.onSaveTask({ ...this.state, updatedAt: new Date() })
         } else {
            this.props.onAddTask(this.state)
         }
         this.onClear()
      }
   }

   onClear = () => {
      console.log('run onClear')
      this.setState({
         title: '',
         status: 'show',
         errors: []
      })
      this.props.onEditTask({
         id: '',
         title: '',
         status: 'show',
         createdAt: ''
      })
      this.props.onCloseForm()
   }

   render() {
      let { taskEditing, onCloseForm } = this.props

      return (
         <div className='border border-warning task-form round-small pd-0'>
            <h2 className='form-heading'>
               {taskEditing.id ? 'Edit Task' : 'Add Word'}
               <i
                  className='fas fa-backspace close-form-btn interactable'
                  onClick={() => onCloseForm()}
               ></i>
            </h2>
            <form className='container' onSubmit={this.onSubmit.bind(this)}>
               <div className='form-group'>
                  <label htmlFor='title' className='label interactable'>
                     Title
                  </label>
                  <input
                     className='form-control'
                     type='text'
                     name='title'
                     id='title'
                     placeholder='Enter new word'
                     value={this.state.title}
                     onChange={this.onChange}
                  />
                  <span className='error-message'>{this.state.errors[0]}</span>
               </div>
               <div className='form-group'>
                  <label htmlFor='status' className='label interactable'>
                     Status
                  </label>
                  <select
                     className='form-control'
                     name='status'
                     id='status'
                     value={this.state.status}
                     onChange={this.onChange}
                  >
                     <option value='show'>Show</option>
                     <option value='hide'>Hide</option>
                  </select>
               </div>
               <div className='text-center mb-3'>
                  <button
                     type='submit'
                     className='btn btn-warning mr-2 text-white'
                  >
                     {taskEditing.id ? 'Save' : 'Add'}
                  </button>
                  <button
                     type='button'
                     className='btn btn-secondary ml-2'
                     onClick={this.onClear}
                  >
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      )
   }
}

const mapStateToProps = state => ({ taskEditing: state.taskEditing })

const mapDispatchToProps = dispatch => ({
   onCloseForm: () => dispatch(actions.closeForm()),
   onAddTask: task => dispatch(actions.addTask(task)),
   onSaveTask: task => dispatch(actions.saveTask(task)),
   onEditTask: task => dispatch(actions.editTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
