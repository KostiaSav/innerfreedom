import type ButtonProps from './Button.props';
import './Button.css';

const Button = (props: ButtonProps) => {
	return (
		<button
			onClick={props.onClick}
			style={props.styles}
			className={`btn--${props.variant ? props.variant : 'primary'} text-upper`}
		>
			{props.text}
		</button>
	);
};

export default Button;
