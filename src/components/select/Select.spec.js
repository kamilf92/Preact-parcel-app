import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import { Select } from './Select';

describe('components/select', () => {

	it('should create select options', () => {
		const select = shallow(<Select options={[{value: 1, text: 'A'}, {value: 2, text: 'A'}]} value={1} />);
		expect(select.find('option').length).toBe(2);

	});

	it('should invoke change event', () => {
		const trigger = jest.fn();
		const select = shallow(<Select options={[{value: 1, text: 'A'}, {value: 2, text: 'B'}]} value={2} handleChange={trigger} />);
		select.find('select').simulate('change');
		expect(trigger).toHaveBeenCalled();
	});

});
