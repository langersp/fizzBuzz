const readline = require('readline');
const rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

let fizzBuzzApp = {
	//command line utility to ask user for a number to pass to fizzbuzz
	init: function() {
		rl.question('Please enter a number... ', (answer) => {
     		this.run(answer);
			rl.close();
		});
	},
	//run fizzbuzz
	run: function(max = 10) {
		max = parseInt(max);
		if (max <= 0) return "Error: Please enter a positive number";
		if (typeof max !== "number" || isNaN(max)) return "Error: Please enter a number";

		for(i=1; i<=max; i++) {
			this.render(this.fizzBuzz(i));
		}
	},
	//logic
	fizzBuzz: function(number) {		
		if(number%3 === 0 && number%5 === 0) {
	    	return "FizzBuzz";
	    } 
	    else if(number%3 === 0) {
	    	return "Fizz";
	    } 
	    else if (number%5 === 0) {
	    	return "Buzz";
	    } else {
	    	return number
	    }
	},
	//view
	render: function(message) {
		console.log(message);
	}
}

fizzBuzzApp.init();
module.exports = fizzBuzzApp