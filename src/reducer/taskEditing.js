import types from '../constants/ActionTypes'

let initialState = { id: '', title: '', status: 'show', createdAt: '' }

function task(state = initialState, action) {
   switch (action.type) {
      case types.EDIT_TASK:
         return action.task
      default:
         return state
   }
}

export default task
