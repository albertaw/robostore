const chai = require('chai');
const expect = chai.expect;
const axios = require('axios');
const host = 'http://localhost:8080';

describe('Item', function() {
	it('should create item', async function() {
		const post = await axios.post(host + '/api/items', {
			itemId: 11,
			userId: 3,
			name: 'Test Item',
			cost: .99,
			currency: 'USD',
			amount: 100,
		})

		expect(post.data.name).to.equal('Test Item');
	});

	it('should get item', async function() {
		const post = await axios.get(host + '/api/items/11');
		expect(post.data.name).to.equal('Test Item');
	});

	it('should update item', async function() {
		const item = await axios.put(host + '/api/items/11', {
			name: 'Test item update'
		});

		expect(item.data.name).to.equal('Test item update');
	});

	it('should remove item', async function() {
		const item = await axios.delete(host + '/api/items/11');

		expect(item.data.itemId).to.equal(11);
	});

	it('should list all items', async function() {
		const items = await axios.get(host + '/api/items');

		expect(items.data.length).to.equal(11);
	});
});
