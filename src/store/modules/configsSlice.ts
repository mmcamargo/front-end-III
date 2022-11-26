import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Configs from '../../shared/types/configs'
import { RootState } from '../rootReducer'

const initialState: Configs = {
	loggedUser: {
		id: null,
		name: ''
	}
}

const configsSlice = createSlice({
	name: 'configsSlice',
	initialState,
	reducers: {
		updateConfigs: (state, action: PayloadAction<Configs>) =>
			(state = action.payload)
	}
})

export const { updateConfigs } = configsSlice.actions

export const configsSliceSelectAll = (state: RootState) => state.configsSlice

export default configsSlice.reducer
