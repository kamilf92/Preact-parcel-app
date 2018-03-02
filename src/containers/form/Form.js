import { h, Component } from 'preact';
import './Form.css';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';

const TYPES = {
	XML: 'xml',
	JSON: 'json'
};

export default class Form extends Component {
	state = {
		type: TYPES.JSON
	}

	onSelectChange = (e) => {
		this.setState({'type': e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.type);
	}

	getSelectOptions() {
		return [
			{text: 'JSON', value: TYPES.JSON},
			{text: 'XML', value: TYPES.XML}
		];
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form'>
				<Select handleChange={this.onSelectChange} value={this.state.type} options={this.getSelectOptions()} />
				<Button text='Send' type="submit" />
			</form>
		);
	}
}