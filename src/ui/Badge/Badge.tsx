import './Badge.css';
import type BadgeProps from './Badge.props';

const Badge = (props: BadgeProps) => {
	return <div className='badge'>{props.children}</div>;
};

export default Badge;
