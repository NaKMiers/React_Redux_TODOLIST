import types from '../constants/ActionTypes'

class Action {
   toggleForm = () => ({ type: types.TOGGLE_FORM })

   openForm = () => ({ type: types.OPEN_FORM })

   closeForm = () => ({ type: types.CLOSE_FORM })

   updateStatus = taskId => ({ type: types.UPDATE_STATUS, taskId })

   addTask = task => ({ type: types.ADD_TASK, task })

   deleteTask = taskId => ({ type: types.DELETE_TASK, taskId })

   editTask = task => ({ type: types.EDIT_TASK, task })

   saveTask = task => ({ type: types.SAVE_TASK, task })

   filterTask = filter => ({ type: types.FILTER_TASK, filter })

   searchTask = keyword => ({ type: types.SEARCH_TASK, keyword })

   sortTask = sort => ({ type: types.SORT_TASK, sort })
}

export default new Action()
