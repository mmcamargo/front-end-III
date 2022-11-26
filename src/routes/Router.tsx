import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/register' element={<Register />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
