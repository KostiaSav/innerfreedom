export default interface ButtonProps {
	text: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'tertiary';
	styles?: React.CSSProperties;
}
