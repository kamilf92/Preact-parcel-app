import { h } from 'preact';
import './Button.css';

const ButtonThemes = {
	DEFAULT: 'btn-default'
};

const ButtonSizes = {
	SMALL: 'btn-sm',
	MEDIUM: 'btn-md'
};

const Button = ({ text, theme = ButtonThemes.DEFAULT, size = ButtonSizes.MEDIUM }) => {
	 return (
		<button className={`btn ${theme} ${size}`}>
			{text}
		</button>
	);
};

export {Button, ButtonThemes, ButtonSizes};