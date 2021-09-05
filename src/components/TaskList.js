import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux'
import actions from '../actions'

class TaskList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         filterTitle: '',
         filterStatus: 'all'
      }
   }

   onChange = e => {
      let t = e.target
      let key = t.name
      let value = t.value.trim().toLowerCase()
      this.props.onFilterTask({ [key]: value })
   }

   onSortTask = (sort, tasks) => {
      if (sort.type === 'newest') {
         return tasks.sort((a, b) => {
            if (a.createdAt > b.createdAt) return -sort.value
            else if (a.createdAt < b.createdAt) return sort.value
            else return 0
         })
      }
      if (sort.type === 'title') {
         return tasks.sort((a, b) => {
            if (a.title > b.title) return sort.value
            else if (a.title < b.title) return -sort.value
            else return 0
         })
      }
      if (sort.type === 'status') {
         return tasks.sort((a, b) => {
            if (a.status > b.status) return -sort.value
            else if (a.status < b.status) return sort.value
            else return 0
         })
      }
   }

   onSearchTask = (keyword, tasks) => {
      return tasks.filter(task => task.title.toLowerCase().includes(keyword))
   }

   onFilterTask = (filter, tasks) => {
      if (filter.title) {
         tasks = tasks.filter(task =>
            task.title.toLowerCase().includes(filter.title)
         )
      }

      tasks = tasks.filter(task =>
         filter.status === 'all' ? true : filter.status === task.status
      )

      return tasks
   }

   render() {
      let { tasks, filter, keyword, sort } = this.props

      tasks = this.onSortTask(sort, tasks)

      tasks = this.onSearchTask(keyword, tasks)

      tasks = this.onFilterTask(filter, tasks)

      let elementTasks = tasks.map((task, index) => {
         return (
            <TaskItem
               key={task.id}
               index={index + 1}
               task={task}
               onShowModalDelete={this.props.onShowModalDelete}
            />
         )
      })

      return (
         <div className='col-lg-12 pd-0'>
            <table className='table table-hover table-bordered'>
               <thead className='text-center'>
                  <tr>
                     <th>Number</th>
                     <th>Task</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className='text-center'>
                     <td></td>
                     <td>
                        <input
                           className='form-control'
                           name='title'
                           placeholder='Enter title to filter'
                           onChange={this.onChange}
                        />
                     </td>
                     <td>
                        <select
                           className='form-control'
                           name='status'
                           onChange={this.onChange}
                        >
                           <option value='all'>All</option>
                           <option value='show'>Show</option>
                           <option value='hide'>Hide</option>
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

const mapStateToProps = state => ({
   tasks: state.tasks,
   filter: state.filterTask,
   keyword: state.searchTask,
   sort: state.sortTask
})

const mapDispatchToProps = dispatch => ({
   onFilterTask: filter => dispatch(actions.filterTask(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
