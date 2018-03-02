import { h } from 'preact';
import { expect } from 'chai';
import Button from './Button';

describe('components/button', () => {
	it('should set button text properly', () => {
		const button = <Button text='Text' theme='Theme' size='medium' />;
		expect(button).to.contain('Text');
	});
});
