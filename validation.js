const number = 23;

if (typeof number === "number") {
	console.log("number");
} else {
	console.log("others");
}

const array = [2, 4, 5, 6];

if (Array.isArray(array) === true) {
	console.log("array");
}

console.log(isNaN(5));
console.log(isNaN("hhh"));
console.log(isNaN([]));
