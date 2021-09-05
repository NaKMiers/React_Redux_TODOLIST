import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskItem from './TaskItem'

class TaskList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         filterTitle: '',
         filterStatus: 'all'
      }
   }

   onChange = async function (e) {
      let t = e.target
      let key = t.name
      let value = t.value.trim().toLowerCase()

      await this.setState({ [key]: value })
      this.props.onGetFilterKey(this.state)
   }

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
                           name='filterTitle'
                           placeholder='Enter title to filter'
                           onChange={this.onChange.bind(this)}
                        />
                     </td>
                     <td>
                        <select
                           className='form-control'
                           name='filterStatus'
                           onChange={this.onChange.bind(this)}
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

const mapStateToProps = state => ({ tasks: state.tasks })

export default connect(mapStateToProps, null)(TaskList)
