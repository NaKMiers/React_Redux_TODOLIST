import types from '../constants/ActionTypes'

let initialState = {
   type: 'newest',
   value: 1
}

function sortTask(state = initialState, action) {
   switch (action.type) {
      case types.SORT_TASK:
         console.log(action)
         return action.sort
      default:
         return state
   }
}

export default sortTask
