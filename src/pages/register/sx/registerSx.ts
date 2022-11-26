import { grey } from '@mui/material/colors'

const containerSx = {
	bgcolor: 'inherit',
	display: 'grid',
	maxWidth: '100vw',
	minHeight: '100vh',
	p: { xs: 'var(--small-spacing)', sm: 'var(--medium-spacing)' },
	placeItems: 'center'
}

const boxSx = {
	width: { xs: '100%', sm: 375 }
}

const paperSx = {
	bgcolor: '#252525',
	display: 'grid',
	gap: 'var(--medium-spacing)',
	minWidth: '100%',
	p: 'var(--medium-spacing)',
	placeItems: 'center'
}

const textFieldSx = {
	display: 'grid',
	gap: '4px',
	'& .MuiOutlinedInput-root': {
		'& > fieldset': { borderColor: grey[600] }
	}
}

export { containerSx, boxSx, paperSx, textFieldSx }
