import { createTheme } from '@mui/material'
import { grey, indigo } from '@mui/material/colors'

const theme = createTheme({
	palette: {
		text: {
			primary: grey[500],
			secondary: grey[600]
		},
		primary: {
			main: indigo[500]
		}
	}
})

export default theme
