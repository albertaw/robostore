const chai = require('chai');
const expect = chai.expect;
const axios = require('axios');
const host = 'http://localhost:8080';

describe('User', function() {
	it('should create an user', async function() {
		const user = await axios.post(host + '/api/users', {
			"userId": 6, 
			"name": "Jane", 
			"role": "customer", 
			"walletId": 6
		});

		expect(user.data.userId).to.equal(6);
	});

	it('should get user', async function() {
		const user = await axios.get(host + '/api/users/6');
		expect(user.data.name).to.equal('Jane');
	})

	it('should update user', async function() {
		const user = await axios.put(host + '/api/users/6', {
			name: "Jennifer"
		});

		expect(user.data.name).to.equal('Jennifer');
	})

	it('should remove user', async function() {
		const user = await axios.delete(host + '/api/users/6');
		expect(user.data.userId).to.equal(6);
	})

	it('should list all users', async function() {
		const users = await axios.get(host + '/api/users')
		expect(users.data.length).to.equal(4)
	});

	it('shoulg get user inventory', async function() {
		const inventory = await axios.get(host + '/api/users/1/inventory')
		expect(inventory.data.length).to.equal(4);

		const expected = { 
			"_id": "5c2aabd321378f244c3eaff7",        
			"itemId": 4,        
			"userId": 1,        
			"name": "Watermelon",        
			"cost": 0.99,        
			"currency": "USD",        
			"amount": 50,        
			"url": "https://s3.amazonaws.com/robochild.com/images/watermelon.png"    
		};

		expect(inventory.data).to.deep.include(expected);
	});
});