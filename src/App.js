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
         tasks: [],
         taskEditing: null,
         taskWillDelete: undefined,
         errorsForm: [],
         keyword: '',
         filter: {
            title: '',
            status: 'all'
         },
         sort: {
            type: 'newest',
            value: 1
         }
      }
   }

   componentDidMount() {
      if (localStorage.getItem('tasks')) {
         var tasks = JSON.parse(localStorage.getItem('tasks'))
         this.setState({ tasks })
      }
   }

   // Form

   // onToggleForm = status => {
   //    if (!status) {
   //       this.setState({ isDisplayForm: !this.state.isDisplayForm })
   //    } else {
   //       if (status === 'show') this.setState({ isDisplayForm: true })
   //       if (status === 'hide') this.setState({ isDisplayForm: false })
   //    }
   // }

   onSubmit = (task, taskId) => {
      let { tasks } = this.state
      if (task.errors.length > 0) {
         this.state.errorsForm.push(task.errors)
         this.setState({ errorsForm: this.state.errorsForm })
      } else {
         if (!taskId) {
            // Add New Task
            task = {
               id: this.generateId(),
               title: task.title,
               status: task.status,
               createdAt: task.createdAt
            }
            tasks.unshift(task)
            this.setState({ tasks })
            localStorage.setItem('tasks', JSON.stringify(tasks))
         } else {
            // Edit Task
            let i = this.findIndex(taskId)
            task = {
               id: task.id,
               title: task.title,
               status: task.status,
               createdAt: task.createdAt,
               updatedAt: new Date()
            }
            tasks[i] = task
            this.setState({ tasks })
            localStorage.setItem('tasks', JSON.stringify(tasks))
            this.setState({ taskEditing: null })
            this.onToggleForm('hide')
         }
      }
   }

   // Control
   onSearch = keyword => {
      this.setState({ keyword })
   }

   onGetTypeAndValue = (type, value) => {
      console.log(type, value)
      this.setState({
         sort: { type, value }
      })
   }

   onSort(type, value) {
      let { tasks } = this.state
      if (type === 'newest') {
         return tasks.sort((a, b) => {
            if (a.createdAt > b.createdAt) return -value
            else if (a.createdAt < b.createdAt) return value
            else return 0
         })
      }
      if (type === 'title') {
         return tasks.sort((a, b) => {
            if (a.title > b.title) return value
            else if (a.title < b.title) return -value
            else return 0
         })
      }
      if (type === 'status') {
         return tasks.sort((a, b) => {
            if (a.status > b.status) return -value
            else if (a.status < b.status) return value
            else return 0
         })
      }
   }

   // Task List
   exchangeStatus = taskId => {
      let { tasks } = this.state
      let i = this.findIndex(taskId)
      tasks[i].status = tasks[i].status === 'show' ? 'hide' : 'show'
      this.setState({ tasks })

      localStorage.setItem('tasks', JSON.stringify(tasks))
   }

   onEdit = async function (taskId) {
      let { tasks } = this.state
      let i = this.findIndex(taskId)

      await this.setState({
         taskEditing: tasks[i]
      })

      await this.onToggleForm('hide')
      this.onToggleForm('show')
   }

   onCancel = () => {
      this.setState({ taskEditing: null })
      this.onToggleForm()
   }

   onShowModalDelete = taskId => {
      this.setState({ taskWillDelete: taskId })
   }

   onDelete = taskId => {
      if (taskId) {
         let { tasks } = this.state
         console.log(taskId)
         let i = this.findIndex(taskId)
         tasks.splice(i, 1)
         this.setState({ tasks })
         localStorage.setItem('tasks', JSON.stringify(tasks))
      }
   }

   onGetFilterKey = filter => {
      this.setState({
         filter: {
            title: filter.filterTitle,
            status: filter.filterStatus
         }
      })
   }

   onFilter(keyword) {
      let { tasks, filter } = this.state
      if (!keyword) {
         return tasks
            .filter(task => task.title.toLowerCase().includes(filter.title))
            .filter(task =>
               filter.status === 'all' ? true : filter.status === task.status
            )
      } else {
         return tasks
            .filter(task => task.title.toLowerCase().includes(keyword))
            .filter(task =>
               filter.status === 'all' ? true : filter.status === task.status
            )
      }
   }

   render() {
      let { isDisplayForm } = this.props
      // let { keyword, sort } = this.state

      let elementTaskForm = isDisplayForm ? (
         <TaskForm
            onToggleForm={this.onToggleForm}
            onSubmit={this.onSubmit}
            errorsForm={this.state.errorsForm}
            taskEditing={this.state.taskEditing}
            onCancel={this.onCancel}
         />
      ) : (
         ''
      )

      // tasks = this.onSort(sort.type, sort.value)
      // tasks = keyword ? this.onFilter(keyword) : this.onFilter()

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

                     <TaskControl
                        onSearch={this.onSearch}
                        onGetTypeAndValue={this.onGetTypeAndValue}
                        sort={this.state.sort}
                     />
                     <TaskList
                        exchangeStatus={this.exchangeStatus}
                        onEdit={this.onEdit.bind(this)}
                        onShowModalDelete={this.onShowModalDelete}
                        onGetFilterKey={this.onGetFilterKey}
                     />
                  </div>
               </div>
            </div>
            <DeleteTaskModal
               taskWillDelete={this.state.taskWillDelete}
               onDelete={this.onDelete}
            />
         </div>
      )
   }
}

const mapStateToProps = state => ({ isDisplayForm: state.displayForm })

export default connect(mapStateToProps, null)(App)
