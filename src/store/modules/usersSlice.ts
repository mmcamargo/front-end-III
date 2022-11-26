import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import User from '../../shared/types/user'

const adapter = createEntityAdapter<User>({
	selectId: (user) => user.id
})

const usersSlice = createSlice({
	name: 'usersSlice',
	initialState: adapter.getInitialState(),
	reducers: {
		addUser: adapter.addOne
	}
})

export const { selectAll, selectById } = adapter.getSelectors(
	(state: any) => state.usersSlice
)

export const { addUser } = usersSlice.actions

export default usersSlice.reducer
