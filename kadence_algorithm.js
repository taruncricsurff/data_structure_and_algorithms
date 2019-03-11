var a = [2,3,40,130,-199,-1,-52,300,15,1,2,50,-40,20];


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

		if(sum  >= lastmax ) {

			lastmax = sum;
			start = canbestarting;
			ending = i;
		}


	} else if(a[i]< 0 ){

		sum = sum + a[i];
		
		if(sum < 0) { 
			
			sum = 0;
			if(i+1 < length)
				canbestarting = i +1;

		} 
	}

	++i;

	//console.log('sum',sum,'lastmax',lastmax,'start','end','canbestarting',start,ending,canbestarting,a);

}


console.log(lastmax,'starting',start,'ending',ending);











