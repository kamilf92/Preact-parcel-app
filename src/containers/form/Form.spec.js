import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import Form from './Form';

describe('containers/form', () => {

	it('should invoke function on form submit', () => {
		const handleSubmit = jest.fn();
		const form = shallow(<Form onSubmit={handleSubmit} />);
		form.find('form').simulate('submit', { preventDefault: jest.fn() });
		expect(handleSubmit).toHaveBeenCalled();
	});

	it('should update state on onSelectChange', () => {
		const value = 'json';
		const handleSubmit = jest.fn();
		const form = shallow(<Form onSubmit={handleSubmit} />);
		form.component().onSelectChange({ target: {value}});
		expect(form.state()).toEqual({type: value});
	});

	it('should return select options', () => {
		const handleSubmit = jest.fn();
		const form = shallow(<Form onSubmit={handleSubmit} />);
		const options = form.component().getSelectOptions();
		expect(options.length).toEqual(2);
	});
});
