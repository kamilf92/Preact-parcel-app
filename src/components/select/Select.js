import { h } from 'preact';
import './Select.css';

const Select = ({ handleChange, value, options }) => {
	return (
		<select className='dropdown' onChange={handleChange} value={value} >
			{options.map(({text, value}) =>
				<option value={value}>{text}</option>
			)}
		</select>
	);
};

export default Select;
 