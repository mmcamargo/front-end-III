import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
