'use strict';

let app = require('../app');
let request = require('supertest')(app);
let debug = require('debug')('curso_nodejs:test:main');
let assert = require('assert');

describe('main routes', function(){
	
	it('GET / should respond 200',function(done) {
		request
			.get('/')
			.end(function(err, result) {
				assert.equal(result.status, 200);
				assert.deepEqual(result.body, {});
				assert.ok(/<title>Document<\/title>/.test(result.text));

				// debug(err, result.body, result.text, result.status, result.headers);
				done();
			});

		debug('após');
	});

	it('GET /not-found should respond 404',function(done) {
		request
			.get('/not-found')
			.end(function(err, result) {
				assert.equal(result.status, 404)
				done();
		});
	});

	it('GET /api should respond blah',function(done) {
		request
			.get('/api')
			.end(function(err, result) {
				assert.equal(result.status, 200);
				assert.equal(result.text, 'blah');
				done();
		});
	});



});