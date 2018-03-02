import { getResponse } from './ApiUtils';
import { expect } from 'chai';

describe('components/app', () => {
	beforeEach(() => {
		global.fetch = jest.fn().mockImplementation(() => {
			const p = new Promise((resolve) => resolve({ok: true, text: () => 'response'}));
			return p;
		});
	
	});

	it('should get response correctly', async () => {
		const response = await getResponse('json');
		expect(response).to.equal('response');
	});
});
