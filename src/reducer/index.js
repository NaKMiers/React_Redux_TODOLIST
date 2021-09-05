import { combineReducers } from 'redux'
import displayForm from './displayForm'
import tasks from './tasks'

const reducer = combineReducers({ displayForm, tasks })

export default reducer
