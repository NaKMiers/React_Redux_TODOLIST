import types from '../constants/ActionTypes'

let initialState = {
   title: '',
   status: 'all'
}

function filterTask(state = initialState, action) {
   switch (action.type) {
      case types.FILTER_TASK:
         if (action.filter.title) {
            state.title = action.filter.title
         }
         if (action.filter.status) {
            state.status = action.filter.status
         }
         return state
      default:
         return state
   }
}

export default filterTask
