'use strict';

let app = require('../app');
let request = require('supertest')(app);
let assert = require('assert');
let debug = require('debug')('curso_nodejs:test:stormtroppers');
let db = require('../db/mongo');


describe('stormtroppers crud', function(){
	let _id;

	beforeEach(function(done) {
		let st = {
			name: 'ST-1234',
			alias: 'Test ST'				
		}

		db.collection('stormtroppers').remove({}, function() {
			db.collection('stormtroppers').insert(st, function(err, result) {
				_id = String(result._id);
				done();
			})
		});
	});

	it('GET /api/stormtroppers', function(done) {
		request
			.get('/api/stormtroppers')
			.end(function(err, result) {
				debug(result.body.length);
				assert.equal(result.body.length, 1);
				done();
			});
	});

	it('GET /api/stormtroppers/:id', function(done) {
		request
			.get('/api/stormtroppers/'+ _id)
			.end(function(err, result) {
				debug(result.body);
				done();
		});
	});

	it('POST /api/stormtroppers', function(done) {
		request
			.post('/api/stormtroppers')
			.send({'name':'ct-test', 'alias' : 'tester storm'})
			.set({'Content-Type': 'application/x-www-form-urlencoded'})
			.end(function(err, result) {
				debug(result.body);
				done();
			});
	});

	it('PUT /api/stormtroppers/:id', function(done) {
		request
			.put('/api/stormtroppers/'+ _id)
			.send({ 'name': 'test PUT'})
			.set({'Content-Type': 'application/x-www-form-urlencoded'})
			.end(function(err, result) {
				debug(result.body)
				done();
			});
	});


	it('DELETE /api/stormtroppers/:id', function(done) {
		request
			.delete('/api/stormtroppers/'+ _id)
			.end(function(err, result) {
				debug(err)
				done();
			});
	});
});