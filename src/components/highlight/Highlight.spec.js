import { h, render } from 'preact';
import { expect } from 'chai';
import Highlight from './Highlight';

describe('components/highlight', () => {
	let scratch;

	beforeAll( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	afterAll( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});

	it('should create highlihter with given content', () => {
		const text = 'Sample code';
		render(<Highlight content={text} />, scratch);
		expect(scratch.innerHTML).to.contain(text);
	});
});
