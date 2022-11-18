import AppRoutes from './routes/Router'
import GlobalStyle from './config/styles/GlobalStyle'

function App(): JSX.Element {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
		</>
	)
}

export default App
