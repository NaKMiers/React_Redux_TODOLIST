import React, { Component } from 'react'
import TaskSearchControl from './TaskSearchControl'
import TaskSortControl from './TaskSortControl'

class TaskControl extends Component {
   render() {
      return (
         <div className='row task-control'>
            <TaskSearchControl onSearch={this.props.onSearch} />
            <TaskSortControl
               onGetTypeAndValue={this.props.onGetTypeAndValue}
               sort={this.props.sort}
            />
         </div>
      )
   }
}

export default TaskControl
