import { h, Component } from 'preact';
import './App.css';

import Form from '../../containers/form/Form';
import { ReactHighlight } from '../../components/highlight/Highlight';
import { getResponse} from '../../utiles/ApiUtils';

const STATE = {
	LOADING: 'loading',
	ERROR: 'error',
	RESPONSE: 'response'
};

export default class App extends Component {
	state = {
		state: '',
		response: ''
	}

	onFormSubmit = async (value) => {
		try {
			this.setState({ state: STATE.LOADING});
			let response = await getResponse(value);
			this.setState({ response, state: STATE.RESPONSE });
		} catch (error) {
			this.setState({ state: STATE.ERROR });
		}
		
	}

	getContentView() {
		switch (this.state.state) {
			case STATE.RESPONSE:
				return <ReactHighlight content={this.state.response} />;
			case STATE.LOADING:
				return 'Loading...';
			case STATE.ERROR:
				return 'Error :(';
			default:
				return;
		}
	}

	render() {
		return (
			<div className='container'>
				<Form onSubmit={this.onFormSubmit} />
				{this.getContentView()}
			</div>
		);
	}
}
