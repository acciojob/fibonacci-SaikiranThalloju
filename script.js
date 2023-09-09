function fibonacci(num) {

	if(num === 0){
		return 0;
	}
	else if(num == 1){
		return 1;
	}

	else{
let a = 0;
	let b = 1;
	let c;
	for(int i = 2;i<=num;i++){
	      c = a+b;
		b = c;
		a = b;
	}
	return c;
	}
}

module.exports = fibonacci;
