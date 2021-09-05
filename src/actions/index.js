import types from '../constants/ActionTypes'

class Action {
   toggleForm = () => ({ type: types.TOGGLE_FORM })

   openForm = () => ({ type: types.OPEN_FORM })

   closeForm = () => ({ type: types.CLOSE_FORM })

   updateStatus = taskId => ({ type: types.UPDATE_STATUS, taskId })

   addTask = task => ({ type: types.ADD_TASK, task })
}

export default new Action()
