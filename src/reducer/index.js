import { combineReducers } from 'redux'
import displayForm from './displayForm'
import tasks from './tasks'
import taskEditing from './taskEditing'
import filterTask from './filterTask'
import searchTask from './searchTask'
import sortTask from './sortTask'

const reducer = combineReducers({
   displayForm,
   tasks,
   taskEditing,
   filterTask,
   searchTask,
   sortTask
})

export default reducer
