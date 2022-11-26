import FormStyled from './FormStyled'

function Form(props: React.FormHTMLAttributes<any>): JSX.Element {
	return <FormStyled {...props}>{props.children}</FormStyled>
}

export default Form
