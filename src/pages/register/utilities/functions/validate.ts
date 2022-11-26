import FieldStatus from '../../types/fieldStatus'

function validate(
	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	auxValue?: string | undefined
) {
	const fieldName = e.target.name
	const fieldValue = e.target.value

	if (fieldName === 'name') {
		const nameStatus: FieldStatus = validateName(fieldValue)

		return nameStatus
	}

	if (fieldName === 'lastName') {
		const lastNameStatus: FieldStatus = validateLastName(fieldValue)

		return lastNameStatus
	}

	if (fieldName === 'email') {
		const emailStatus: FieldStatus = validateEmail(fieldValue)

		return emailStatus
	}

	if (fieldName === 'password') {
		const passwordStatus: FieldStatus = validatePassword(
			fieldValue,
			auxValue
		)

		return passwordStatus
	}

	if (fieldName === 'rePassword') {
		const rePasswordStatus: FieldStatus = validateRePassword(
			fieldValue,
			auxValue!
		)

		return rePasswordStatus
	}

	return {
		error: false,
		helperText: ''
	}
}

function validateName(name: string) {
	const nameRegEx =
		/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
	const matchName = name.match(nameRegEx)

	if (!name) {
		return {
			error: true,
			helperText:
				'Por favor, informe seu primeiro nome. Este campo é obrigatório!'
		}
	}

	if (!matchName) {
		return {
			error: true,
			helperText:
				'Por favor, informe seu primeiro nome. Deve ser um nome válido!'
		}
	}

	return {
		error: false,
		helperText: 'Por favor, informe seu primeiro nome.'
	}
}

function validateLastName(lastName: string) {
	const lastNameRegEx =
		/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
	const matchLastName = lastName.match(lastNameRegEx)

	if (!lastName) {
		return {
			error: true,
			helperText: 'Insira seu sobrenome. Este campo é obrigatório!'
		}
	}

	if (!matchLastName) {
		return {
			error: true,
			helperText: 'Insira seu sobrenome. Deve ser um sobrenome válido!'
		}
	}

	return {
		error: false,
		helperText: 'Insira seu sobrenome.'
	}
}

function validateEmail(email: string) {
	const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm
	const matchEmail = email.match(emailRegEx)

	if (!email) {
		return {
			error: true,
			helperText:
				'Digite um e-mail que utiliza atualmente. Este campo é obrigatório!'
		}
	}

	if (!matchEmail) {
		return {
			error: true,
			helperText:
				'Digite um e-mail que utiliza atualmente. Deve ser um e-mail válido!'
		}
	}

	return {
		error: false,
		helperText: 'Digite um e-mail que utiliza atualmente.'
	}
}

function validatePassword(password: string, rePassword: string | undefined) {
	const passwordRegEx = /^[a-zA-Z1-9\S]{8,}$/gm
	const matchPassword = password.match(passwordRegEx)

	if (!password) {
		return {
			error: true,
			helperText:
				'A senha deve conter ao menos oito caracteres, sem espaços em branco. Este campo é obrigatório!'
		}
	}

	if (!matchPassword) {
		return {
			error: true,
			helperText:
				'A senha deve conter ao menos oito caracteres, sem espaços em branco. Deve ser uma senha válida!'
		}
	}

	return {
		error: false,
		helperText:
			'A senha deve conter ao menos oito caracteres, sem espaços em branco.'
	}
}

function validateRePassword(rePassword: string, password: string) {
	if (!password) {
		if (!rePassword) {
			return {
				error: false,
				helperText: 'Deve coincidir com a senha anterior.'
			}
		}
	}

	if (password !== '') {
		if (rePassword !== password) {
			return {
				error: true,
				helperText: 'Deve coincidir com a senha anterior.'
			}
		} else {
			return {
				error: false,
				helperText: 'Deve coincidir com a senha anterior.'
			}
		}
	}

	return {
		error: false,
		helperText: 'Deve coincidir com a senha anterior.'
	}
}

export default validate
