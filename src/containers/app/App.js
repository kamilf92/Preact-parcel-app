import { h, Component } from 'preact';
import './App.css';

import Form from '../../containers/form/Form';

const STATES = {
	LOADING: 'loading',
	ERROR: 'error',
	RESPONSE: 'response'
};

export default class App extends Component {
	state = {
		state: STATES.LOADING
	}

	onFormSubmit = (value) => {
		console.log(value);
	}

	render() {
		return (
			<div className='container'>
				<Form onSubmit={this.onFormSubmit} />
			</div>
		);
	}
}
