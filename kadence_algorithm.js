var a = [2,3,4,100,-99,-1,-25,100,15,1,2,-40,20];


var i =0;
var length = a.length;


var sum = 0;
var lastmax = 0;

while(i<length){

	if(a[i] >= 0) {

		sum = sum + a[i];

		if(sum  >= lastmax ) {

			lastmax = sum;

		}

	} else if(a[i]< 0 ){

		sum = sum + a[i];
		
		if(sum < 0)
			sum = 0;
	}
	++i;

	console.log('sum',sum,'lastmax',lastmax);

}


console.log(lastmax);











