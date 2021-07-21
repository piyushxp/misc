// Decorator wrap a function in another function
// These wrappers 'decorate' the original function
// Benefits --> DRY and clean code through Compositions

// Javascript Decorator Functions
let sum = (...args) => {
	return [...args].reduce((acc, curr) => acc + curr);
};

//callCounter is a decorator , going to count how many time a fn is called
const callCounter = (fn) => {
	let count = 0;

	//using closure we have access to the count varaible inside the anonymous function
	return (...args) => {
		console.log(`Sum has been called ${(count += 1)} times`);
		return fn(...args);
	};
};

//wrap the original fn
sum = callCounter(sum);

//Call
console.log(sum(1, 2, 3)); //Sum has been called 1 times  6
console.log(sum(3, 4, 5)); //Sum has been called 2 times  12
console.log(sum(6, 7, 8)); //Sum has been called 3 times  21
