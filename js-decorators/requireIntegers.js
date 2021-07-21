//Make a decorator fn that makes the original function accept only Integers

//original function
let areaOfTraingle = (base, height) => {
	return 0.5 * base * height;
};

const requireIntegers = (fn) => {
	return function (...params) {
		params.forEach((param) => {
			if (!Number.isInteger(param)) {
				throw new TypeError(`Parameters for ${fn.name} must be Integers`);
			}
		});

		return fn(...params);
	};
};

//wrapping the fn with decorator
areaOfTraingle = requireIntegers(areaOfTraingle);

//calling
console.log(areaOfTraingle(2, "3"));
