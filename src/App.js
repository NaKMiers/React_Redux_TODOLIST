import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskButton from './components/TaskButton'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList'
import DeleteTaskModal from './components/DeleteTaskModal'
class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         taskWillDelete: undefined
      }
   }

   componentDidMount() {
      if (localStorage.getItem('tasks')) {
         var tasks = JSON.parse(localStorage.getItem('tasks'))
         this.setState({ tasks })
      }
   }

   onShowModalDelete = taskId => {
      this.setState({ taskWillDelete: taskId })
   }

   render() {
      let { isDisplayForm } = this.props
      // let { keyword, sort } = this.state

      let elementTaskForm = isDisplayForm ? <TaskForm /> : ''

      return (
         <div className='container'>
            <h1 className='text-center mt-4 mb-4 todo-heading'>TO DO LIST</h1>
            <div className='row'>
               <div className='col-lg-4'>{elementTaskForm}</div>
               <div
                  className={isDisplayForm === true ? 'col-lg-8' : 'col-lg-12'}
               >
                  <div className='container border border-success round-small'>
                     <TaskButton />

                     <TaskControl />
                     <TaskList onShowModalDelete={this.onShowModalDelete} />
                  </div>
               </div>
            </div>
            <DeleteTaskModal taskWillDelete={this.state.taskWillDelete} />
         </div>
      )
   }
}

const mapStateToProps = state => ({ isDisplayForm: state.displayForm })

export default connect(mapStateToProps, null)(App)
