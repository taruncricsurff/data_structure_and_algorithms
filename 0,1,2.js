var c = [1,1,2,0,2,2,0,1,1,0,0];


zero = -1;
two = c.length;
i = 0;
let swap = 0;



while(i < two) {
	
	let temp = 0;

	let x = zero;
	let y = zero;
	let z = two;


	if(c[i] == 0 && c[++x] !=0){



		++swap;
		++ zero;
		temp = c[zero];
		c[zero] = 0;
		c[i] = temp; 


	}
	else if(c[i] ==0 && c[++y]==0){

		++ zero;
		++i;
	}

	else if(c[i] == 2 && c[--z]!=2) {

		--two;
		temp = c[two];
		c[two] = 2;
		c[i]= temp;
		++swap;

	}

	else {

		++i;
	}

	console.log(c,i,swap);
}















