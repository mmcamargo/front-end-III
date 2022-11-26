import { combineReducers } from '@reduxjs/toolkit'
import usersSlice from './modules/usersSlice'
import tasksSlice from './modules/tasksSlice'
import configsSlice from './modules/configsSlice'

const reducers = {
	usersSlice,
	tasksSlice,
	configsSlice
}

const rootReducer = combineReducers({
	...reducers
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
