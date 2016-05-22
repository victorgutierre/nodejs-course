'use strict';

let app = require('../app');
let request = require('supertest')(app);
let assert = require('assert');
let debug = require('debug')('curso_nodejs:test:stormtroppers');

describe('stormtropper crud', function(){

	it('GET /api/stormtroppers', function(done) {
		request
			.get('/api/stormtroppers')
			.end(function(err, result) {
				debug(result.body.length);
				assert.equal(result.body.length, 4);
				done();
			});
	});

	it('GET /api/stormtroppers/:id', function(done) {
		request
			.get('api/stormtroppers/5740976f2902b4869ec96b84')
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
			.put('/api/stormtroppers/574099bd2902b4869ec96b85')
			.send({ 'name': 'test PUT'})
			.set({'Content-Type': 'application/x-www-form-urlencoded'})
			.end(function(err, result) {
				debug(result.body)
				done();
			});
	});


	it.only('DELETE /api/stormtroppers/:id', function(done) {
		request
			.delete('/api/stormtroppers/574099bd2902b4869ec96b85')
			.end(function(err, result) {
				debug(err)
				done();
			});
	});
});