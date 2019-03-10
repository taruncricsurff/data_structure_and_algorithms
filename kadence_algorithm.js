var a = [2,3,4,130,-99,-1,-52,100,15,1,2,-40,20];


var i =0;
var length = a.length;


var sum = 0;
var lastmax = 0;
var starting =0;
var end = 0;
var canbestarting = 0;
var count =0;



while(i<length){

	if(a[i] >= 0) {

		sum = sum + a[i];
		
		if(count ==1) {
			
			canbestarting = i;
			
		}

		if(sum  >= lastmax ) {

			lastmax = sum;
			start = canbestarting;
			ending = i;
		}
		count = 0;

	} else if(a[i]< 0 ){

		sum = sum + a[i];
		 
		
		if(sum < 0) { 
			
			sum = 0;
			count =1;

		} 
	}
	
	++i;

	console.log('sum',sum,'lastmax',lastmax);

}


console.log(lastmax,start,ending);











