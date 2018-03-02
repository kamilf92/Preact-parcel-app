import { h } from 'preact';
import { shallow, render } from 'preact-render-spy';
import App from './App';

describe('containers/app', () => {

	it('should render app with loading view', () => {
		const app = shallow(<App />);
		app.setState({ state: 'loading'});
		expect(app.find('.container').contains('Loading...')).toBeTruthy();
	});

	it('should render app with error view', () => {
		const app = shallow(<App />);
		app.setState({ state: 'error'});
		expect(app.find('.container').contains('Error :(')).toBeTruthy();
	});

	it('should render app with highlight view', () => {
		const app = render(<App />);
		app.setState({ state: 'response', response: 'CODE'});
		expect(app.find('.container').contains('CODE')).toBeTruthy();
	});

	it('should show error if catch will get error', async () => {
		const getResponse = jest.fn(() => {throw Error();});
		const app = render(<App />);
		app.component().getResponse = getResponse;
		await app.component().onFormSubmit();
		expect(app.state()).toEqual({state: 'error', response: ''});
	});

});
