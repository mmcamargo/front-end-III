import { useNavigate } from 'react-router-dom'
import useAppSelector from '../../shared/utilities/hooks/useAppSelector'
import { useEffect, useState } from 'react'
import useAppDispatch from '../../shared/utilities/hooks/useAppDispatch'
import { selectAll } from '../../store/modules/usersSlice'
import {
	configsSliceSelectAll,
	updateConfigs
} from '../../store/modules/configsSlice'
import {
	Container,
	Box,
	Paper,
	Typography,
	TextField,
	Button
} from '@mui/material'
import Form from '../../shared/components/form/Form'
import { containerSx, boxSx, paperSx, textFieldSx } from './sx/loginSx'

function Login(): JSX.Element {
	const navigate = useNavigate()

	const configs = useAppSelector(configsSliceSelectAll)

	useEffect(() => {
		if (configs.loggedUser.id !== null) navigate('/')
	}, [])

	const [email, setEmail] = useState({
		value: '',
		error: false
	})
	const [password, setPassword] = useState({
		value: '',
		error: false
	})

	const [alert, setAlert] = useState({
		show: false,
		text: ''
	})

	const dispatch = useAppDispatch()
	const usersList = useAppSelector(selectAll)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!email.value || !password.value) {
			return setAlert({
				show: true,
				text: 'Preencha todos os campos!'
			})
		}

		const findUser = usersList.find(
			(user) =>
				user.email === email.value && user.password === password.value
		)

		if (!findUser) {
			return setAlert({
				show: true,
				text: 'E-mail ou senha incorretos!'
			})
		} else {
			dispatch(
				updateConfigs({
					loggedUser: { id: findUser.id, name: findUser.name }
				})
			)

			navigate('/')
		}
	}

	const textFields = [
		{
			key: 'email',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			label: 'E-mail',
			error: email.error,
			value: email.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				setEmail({
					value: e.target.value,
					error: email.error
				})
			},
			onFocus: () =>
				alert &&
				setAlert({
					...alert,
					show: false
				})
		},
		{
			key: 'password',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			type: 'password',
			label: 'Senha',
			error: password.error,
			value: password.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				setPassword({
					value: e.target.value,
					error: password.error
				})
			},
			onFocus: () =>
				alert &&
				setAlert({
					...alert,
					show: false
				})
		}
	]

	return (
		<Container sx={containerSx} maxWidth={false}>
			<Box sx={boxSx}>
				<Paper sx={paperSx} elevation={7}>
					<Typography variant='h4'>Login</Typography>
					{alert.show && (
						<Typography color='error' variant='subtitle1'>
							{alert.text}
						</Typography>
					)}
					<Form onSubmit={handleSubmit}>
						{textFields.map((textField) => (
							<TextField
								key={textField.key}
								name={textField.key}
								sx={textFieldSx}
								fullWidth={textField.fullWidth}
								autoComplete={textField.autoComplete}
								type={textField.type}
								label={textField.label}
								error={textField.error}
								value={textField.value}
								onChange={textField.onChange}
								onFocus={textField.onFocus}
							/>
						))}
						<Button variant='contained' fullWidth type={'submit'}>
							Entrar
						</Button>
					</Form>
					<Button
						variant='outlined'
						fullWidth
						onClick={() => navigate('/register')}
					>
						Cadastre-se
					</Button>
				</Paper>
			</Box>
		</Container>
	)
}

export default Login
