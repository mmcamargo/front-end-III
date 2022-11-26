import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import Task from '../../shared/types/task'

const adapter = createEntityAdapter<Task>({
	selectId: (parameter) => parameter.id
})

const tasksSlice = createSlice({
	name: 'tasksSlice',
	initialState: adapter.getInitialState(),
	reducers: {
		addTask: adapter.addOne,
		updateTask: adapter.setOne,
		removeTask: adapter.removeOne
	}
})

export const { selectAll, selectById } = adapter.getSelectors(
	(state: any) => state.tasksSlice
)

export const { addTask, updateTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer
