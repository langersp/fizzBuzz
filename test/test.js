var chai = require('chai');
var assert = chai.assert;

var fizzBuzzApp = require("../app");

describe('FizzBuzz', function() {

	it('should return an error when non-positive integer is passed', function(){
	   var result = fizzBuzzApp.run(-1);
       assert.equal(result, "Error: Please enter a positive number");           
    });

	it('should return an error when non-integer is passed', function(){
	   var result = fizzBuzzApp.run("a string");
       assert.equal(result, "Error: Please enter a number");           
    })

	it('should return Fizz for multiples of 3', function(){
	   var result = fizzBuzzApp.fizzBuzz(3);
	   assert.equal(result, 'Fizz');
	});

	it('should return Buzz for multiples of 5', function(){
	   var result = fizzBuzzApp.fizzBuzz(5);
	   assert.equal(result, 'Buzz');
	});

	it('should return FizzBuzz for multiples of 3 and 5', function(){
	   var result = fizzBuzzApp.fizzBuzz(15);
	   assert.equal(result, 'FizzBuzz');
	});
});