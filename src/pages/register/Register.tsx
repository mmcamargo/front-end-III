import { useState, useEffect } from 'react'
import useAppDispatch from '../../shared/utilities/hooks/useAppDispatch'
import User from '../../shared/types/user'
import { v4 as uuidv4 } from 'uuid'
import { addUser } from '../../store/modules/usersSlice'
import validate from './utilities/functions/validate'
import { useNavigate } from 'react-router-dom'
import {
	Container,
	Box,
	Paper,
	Typography,
	TextField,
	Button
} from '@mui/material'
import Form from '../../shared/components/form/Form'
import { containerSx, boxSx, paperSx, textFieldSx } from './sx/registerSx'

function Register(): JSX.Element {
	const [name, setName] = useState({
		value: '',
		error: false,
		helperText: 'Por favor, informe seu primeiro nome.'
	})
	const [lastName, setLastName] = useState({
		value: '',
		error: false,
		helperText: 'Insira seu sobrenome.'
	})
	const [email, setEmail] = useState({
		value: '',
		error: false,
		helperText: 'Digite um e-mail que utiliza atualmente.'
	})
	const [password, setPassword] = useState({
		value: '',
		error: false,
		helperText:
			'A senha deve conter ao menos oito caracteres, sem espaços em branco.'
	})
	const [rePassword, setRePassword] = useState({
		value: '',
		error: false,
		helperText: 'Deve coincidir com a senha anterior.'
	})

	const [disabledBtn, setDisabledBtn] = useState(true)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (rePassword.value !== '') {
			if (rePassword.value !== password.value) {
				setRePassword({ ...rePassword, error: true })
			} else {
				setRePassword({ ...rePassword, error: false })
			}
		}
	}, [password])

	useEffect(() => {
		if (
			!name.error &&
			!lastName.error &&
			!email.error &&
			!password.error &&
			!rePassword.error
		) {
			if (
				name.value !== '' &&
				lastName.value !== '' &&
				email.value !== '' &&
				password.value !== '' &&
				rePassword.value !== ''
			) {
				setDisabledBtn(false)
			}
		} else {
			setDisabledBtn(true)
		}
	}, [
		name.value,
		lastName.value,
		email.value,
		password.value,
		rePassword.value
	])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newUser: User = {
			id: uuidv4(),
			name: name.value,
			lastName: lastName.value,
			email: email.value,
			password: password.value
		}

		dispatch(addUser(newUser))

		setTimeout(() => {
			navigate('/login')
		}, 1000)
	}

	const textFields = [
		{
			key: 'name',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			label: 'Nome',
			helperText: name.helperText,
			error: name.error,
			value: name.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				const nameStatus = validate(e)

				setName({
					value: e.target.value,
					error: nameStatus.error,
					helperText: nameStatus.helperText
				})
			}
		},
		{
			key: 'lastName',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			label: 'Sobrenome',
			helperText: lastName.helperText,
			error: lastName.error,
			value: lastName.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				const lastNameStatus = validate(e)

				setLastName({
					value: e.target.value,
					error: lastNameStatus.error,
					helperText: lastNameStatus.helperText
				})
			}
		},
		{
			key: 'email',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			label: 'E-mail',
			helperText: email.helperText,
			error: email.error,
			value: email.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				const emailStatus = validate(e)

				setEmail({
					value: e.target.value,
					error: emailStatus.error,
					helperText: emailStatus.helperText
				})
			}
		},
		{
			key: 'password',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			type: 'password',
			label: 'Senha',
			helperText: password.helperText,
			error: password.error,
			value: password.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				const passwordStatus = validate(e)

				setPassword({
					value: e.target.value,
					error: passwordStatus.error,
					helperText: passwordStatus.helperText
				})
			}
		},
		{
			key: 'rePassword',
			sx: textFieldSx,
			fullWidth: true,
			autoComplete: 'off',
			type: 'password',
			label: 'Repita a senha',
			helperText: rePassword.helperText,
			error: rePassword.error,
			value: rePassword.value,
			onChange: (
				e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			) => {
				const rePasswordStatus = validate(e, password.value)

				setRePassword({
					value: e.target.value,
					error: rePasswordStatus.error,
					helperText: rePasswordStatus.helperText
				})
			}
		}
	]

	const navigate = useNavigate()

	return (
		<Container sx={containerSx} maxWidth={false}>
			<Box sx={boxSx}>
				<Paper sx={paperSx} elevation={7}>
					<Typography variant='h4'>Cadastro</Typography>
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
								helperText={textField.helperText}
								error={textField.error}
								FormHelperTextProps={{
									error: textField.error
								}}
								value={textField.value}
								onChange={textField.onChange}
							/>
						))}
						<Button
							variant='contained'
							fullWidth
							type='submit'
							disabled={disabledBtn}
						>
							Cadastrar
						</Button>
					</Form>
					<Button
						variant='outlined'
						fullWidth
						onClick={() => navigate('/login')}
					>
						Conecte-se
					</Button>
				</Paper>
			</Box>
		</Container>
	)
}

export default Register
