import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class TaskItem extends Component {
   render() {
      let { task, index, onShowModalDelete } = this.props

      return (
         <tr>
            <td className='text-center'>{index}</td>
            <td>{task.title}</td>
            <td className='text-center'>
               <span
                  className={
                     task.status === 'show'
                        ? 'label-success interactable'
                        : 'label-danger interactable'
                  }
                  onClick={() => this.props.onUpdateStatus(task.id)}
               >
                  {task.status}
               </span>
            </td>
            <td className='text-center'>
               <button
                  className='btn btn-warning mr-2'
                  onClick={() => this.props.onEdit(task.id)}
               >
                  Edit
               </button>
               <button
                  className='btn btn-danger ml-2'
                  data-toggle='modal'
                  data-target='#deleteTaskModal'
                  onClick={() => onShowModalDelete(task.id)}
               >
                  Delete
               </button>
            </td>
         </tr>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   onUpdateStatus: taskId => dispatch(actions.updateStatus(taskId))
})

export default connect(null, mapDispatchToProps)(TaskItem)
