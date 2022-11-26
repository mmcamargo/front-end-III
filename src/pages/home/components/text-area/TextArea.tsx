import TextAreaStyled from './TextAreaStyled'

function TextArea(props: React.TextareaHTMLAttributes<any>): JSX.Element {
	return <TextAreaStyled {...props} />
}

export default TextArea
