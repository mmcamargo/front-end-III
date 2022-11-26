import theme from './config/theme/theme'
import { ThemeProvider } from '@mui/material'
import AppRoutes from './routes/Router'
import GlobalStyle from './config/styles/GlobalStyle'

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppRoutes />
		</ThemeProvider>
	)
}

export default App
