const containerSx = {
	bgcolor: 'inherit',
	display: 'grid',
	gap: 'var(--small-spacing)',
	gridTemplateColumns: { sm: '1fr 3fr' },
	gridTemplateRows: { xs: '150px 1fr', sm: 'none' },
	maxWidth: 1024,
	minHeight: '100vh',
	p: { xs: '0', sm: '0 var(--small-spacing) !important' }
}

const profileAreaSx = {
	bgcolor: 'inherit',
	height: '100%',
	maxHeight: { xs: 'none', sm: '100vh' },
	p: { xs: '0', sm: 'var(--small-spacing) 0' },
	position: { sm: 'sticky' },
	top: { sm: 0 },
	width: '100%'
}

const profileSx = {
	alignItems: 'center',
	bgcolor: '#252525',
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--small-spacing)',
	height: '100%',
	justifyContent: 'center',
	width: '100%'
}

const tasksAreaSx = {
	bgcolor: 'inherit',
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--small-spacing)',
	p: 'var(--small-spacing)',
	width: '100%'
}

const taskPaperSx = {
	bgcolor: '#252525',
	minHeight: 268.5,
	width: '100%'
}

const taskTitleBoxSx = {
	display: 'grid',
	minHeight: 50,
	p: 'var(--small-spacing)',
	placeItems: 'center'
}

const taskTitleSx = {
	lineHeight: 1
}

const taskContentBoxSx = {
	minHeight: 150,
	p: 'var(--small-spacing)'
}

const taskContentSx = {
	lineHeight: 1
}

const taskBtnBoxSx = {
	alignItems: 'center',
	display: 'flex',
	gap: 'var(--small-spacing)',
	p: 'var(--small-spacing)'
}

export {
	containerSx,
	profileAreaSx,
	profileSx,
	tasksAreaSx,
	taskPaperSx,
	taskTitleBoxSx,
	taskTitleSx,
	taskContentBoxSx,
	taskContentSx,
	taskBtnBoxSx
}
