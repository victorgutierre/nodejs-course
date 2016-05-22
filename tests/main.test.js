'use strict';

describe('main routes', function(){
	
	// .skip or xit instead of it to skip a test
	it.skip('GET / should respond 200',function() {
		throw new Error('erro'); // - Simulando erro
	});

	it('GET /not-found should respond 404',function() {

	});

	// .only to test just one guy and focus on him
	it.only('GET /api should respond blah',function() {

	});

});