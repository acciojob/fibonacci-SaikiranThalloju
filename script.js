function fibonacci(num) {
let a = 0;
	let b = 1;
	for(int i = 2;i<=50;i++){
		let c = a+b;
		b = c;
		a = b;
	}
	return c;
}

module.exports = fibonacci;
