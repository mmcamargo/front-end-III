import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

const persistor = persistStore(store)

export { store, persistor }

export type AppDispatch = typeof store.dispatch
