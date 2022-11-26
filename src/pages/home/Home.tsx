import { useNavigate } from 'react-router-dom'
import useAppDispatch from '../../shared/utilities/hooks/useAppDispatch'
import useAppSelector from '../../shared/utilities/hooks/useAppSelector'
import {
	configsSliceSelectAll as getConfigs,
	updateConfigs
} from '../../store/modules/configsSlice'
import {
	selectAll as getTasks,
	addTask,
	removeTask,
	updateTask
} from '../../store/modules/tasksSlice'
import { useEffect, useState } from 'react'
import Task from '../../shared/types/task'
import { v4 as uuidv4 } from 'uuid'
import {
	Container,
	Box,
	Paper,
	Typography,
	IconButton,
	Button
} from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import Input from './components/input/Input'
import TextArea from './components/text-area/TextArea'
import {
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
} from './sx/homeSx'

function Home(): JSX.Element {
	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	const configs = useAppSelector(getConfigs)
	const tasksList = useAppSelector(getTasks)

	const [taskTitle, setTaskTitle] = useState('')
	const [taskContent, setTaskContent] = useState('')

	const [toggleEditable, setToggleEditable] = useState({
		taskId: '',
		isEditable: false,
		editedTitle: '',
		editedContent: ''
	})

	useEffect(() => {
		if (configs.loggedUser.id === null) navigate('/login')
	}, [])

	const handleAdd = () => {
		dispatch(
			addTask({
				id: uuidv4(),
				uid: configs.loggedUser.id!,
				title: taskTitle,
				content: taskContent
			})
		)

		setTaskTitle('')
		setTaskContent('')
	}

	return (
		<Container sx={containerSx} maxWidth={false}>
			<Box sx={profileAreaSx}>
				<Paper sx={profileSx} elevation={5}>
					<Typography>
						Bem-vindo,
						<Typography
							color='primary'
							fontWeight={'bold'}
							lineHeight={1}
							align='center'
						>
							{}
							{configs.loggedUser.name}
						</Typography>
					</Typography>
					<Button
						endIcon={<LogoutRoundedIcon />}
						onClick={() => {
							dispatch(
								updateConfigs({
									loggedUser: {
										id: null,
										name: ''
									}
								})
							)

							navigate('/login')
						}}
					>
						Sair
					</Button>
				</Paper>
			</Box>
			<Box sx={tasksAreaSx}>
				<Paper sx={taskPaperSx} elevation={5}>
					<Box sx={taskTitleBoxSx}>
						<Input
							placeholder='Título'
							autoFocus
							value={taskTitle}
							onChange={(e) => setTaskTitle(e.target.value)}
						/>
					</Box>
					<Box sx={taskContentBoxSx}>
						<TextArea
							placeholder='Tarefa'
							value={taskContent}
							onChange={(e) => setTaskContent(e.target.value)}
						/>
					</Box>
					<Box
						sx={{
							...taskBtnBoxSx,
							justifyContent: 'flex-end'
						}}
					>
						<Button variant='contained' onClick={handleAdd}>
							Salvar
						</Button>
					</Box>
				</Paper>
				{tasksList
					.slice(0)
					.reverse()
					.map(
						(task) =>
							task.uid === configs.loggedUser.id && (
								<Paper
									sx={taskPaperSx}
									elevation={5}
									key={task.id}
								>
									<Box sx={taskTitleBoxSx}>
										{toggleEditable.isEditable &&
										toggleEditable.taskId === task.id ? (
											<Input
												placeholder='Título'
												autoFocus
												value={
													toggleEditable.editedTitle
												}
												onChange={(e) =>
													setToggleEditable({
														...toggleEditable,
														editedTitle:
															e.target.value
													})
												}
											/>
										) : (
											<Typography
												sx={taskTitleSx}
												fontWeight={'bold'}
											>
												{task.title}
											</Typography>
										)}
									</Box>
									<Box sx={taskContentBoxSx}>
										{toggleEditable.isEditable &&
										toggleEditable.taskId === task.id ? (
											<TextArea
												placeholder='Tarefa'
												value={
													toggleEditable.editedContent
												}
												onChange={(e) =>
													setToggleEditable({
														...toggleEditable,
														editedContent:
															e.target.value
													})
												}
											/>
										) : (
											<Typography sx={taskContentSx}>
												{task.content}
											</Typography>
										)}
									</Box>
									<Box
										sx={{
											...taskBtnBoxSx,
											justifyContent: {
												xs: 'space-between',
												sm: 'flex-end'
											}
										}}
									>
										{toggleEditable.isEditable &&
										toggleEditable.taskId === task.id ? (
											<Button
												variant='outlined'
												onClick={() => {
													setToggleEditable({
														taskId: '',
														isEditable: false,
														editedTitle: '',
														editedContent: ''
													})
												}}
											>
												Cancelar
											</Button>
										) : (
											<Button
												variant='outlined'
												onClick={() => {
													setToggleEditable({
														taskId: task.id,
														isEditable: true,
														editedTitle: task.title,
														editedContent:
															task.content
													})
												}}
											>
												Editar
											</Button>
										)}
										{toggleEditable &&
										toggleEditable.taskId === task.id ? (
											<Button
												variant='contained'
												onClick={() => {
													dispatch(
														updateTask({
															id: task.id,
															uid: task.uid,
															title: toggleEditable.editedTitle,
															content:
																toggleEditable.editedContent
														})
													)

													setToggleEditable({
														taskId: '',
														isEditable: false,
														editedTitle: '',
														editedContent: ''
													})
												}}
											>
												Salvar
											</Button>
										) : (
											<Button
												variant='contained'
												onClick={() => {
													dispatch(
														removeTask(task.id)
													)
												}}
											>
												Deletar
											</Button>
										)}
									</Box>
								</Paper>
							)
					)}
			</Box>
		</Container>
	)
}

export default Home
