import types from '../constants/ActionTypes'

let initialState = []

function getLocalTasks() {
   return JSON.parse(localStorage.getItem('tasks'))
}

function setLocalTasks(tasks) {
   return localStorage.setItem('tasks', JSON.stringify(tasks))
}

function generateId() {
   const s4 = () =>
      Math.floor(1 + Math.random() * 0x10000)
         .toString(16)
         .substring(1)

   return s4() + '-' + s4() + '-' + s4() + '-' + s4()
}

function findIndex(taskId, tasks) {
   let index = -1
   tasks.forEach((task, i) => {
      if (task.id === taskId) {
         index = i
      }
   })
   return index
}

function task(state = initialState, action) {
   if (getLocalTasks()) {
      state = getLocalTasks()
   }

   let index = -1
   switch (action.type) {
      case types.UPDATE_STATUS:
         index = findIndex(action.taskId, state)
         state[index].status === 'show'
            ? (state[index].status = 'hide')
            : (state[index].status = 'show')
         setLocalTasks(state)
         return state
      case types.ADD_TASK:
         let newTask = {
            ...action.task,
            id: generateId()
         }
         state.unshift(newTask)
         setLocalTasks(state)
         return state
      default:
         return state
   }
}

export default task
