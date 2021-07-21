//Example --> 2

let rectangleArea = (length, width) => {
	return length * width;
};

const countParams = (fn) => {
	return function (...args) {
		if (args.length != 2) {
			throw new Error(`The args are incorrect in number for :>> ${fn.name} `);
		}
		return fn(...args);
	};
};

rectangleArea = countParams(rectangleArea);

//call
console.log(rectangleArea(3, 4, 5)); // Error: The args are incorrect in number for :>> rectangleArea
