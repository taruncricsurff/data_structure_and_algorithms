var c  = [9,10,11,100,100,1,6,900,100];  // answer {1,6}
 c = [-100,-200,-8,-6,1,25,100]; // asnswer {-6,1}
 c= [100,200,-8,-6,-2,15,20];   //answer [-2,-6]
 
 


var i = 0;
var length = c.length;
var least_positive = 9999;
var second_least_positive = 9999;
var most_negative = -9999;
var second_most_negative = -9999;


while(i< length) {


	if(c[i] >= 0 && c[i]<=least_positive) {

		second_least_positive = least_positive;
		least_positive = c[i];


	} else if (c[i]>=0 && c[i]<second_least_positive) {

		second_least_positive = c[i];
	

	} else if(c[i]<0 && c[i]>most_negative) {

		second_most_negative = most_negative;
		most_negative = c[i];

	} else if(c[i]<0 && c[i]>second_most_negative) {

		second_most_negative = c[i];
	}
	++i;

} 



var diff1 = (second_least_positive - 0) + (least_positive - 0);
var diff2 = least_positive - (most_negative);
var diff3 = (0 - (most_negative)) + (0-(second_most_negative));

console.log(diff1,diff2,diff3);

if(diff1 <= diff2){

	if(diff1 <=diff3){

		console.log('closet pair',least_positive,second_least_positive);

	} else {

		console.log('closest pair',most_negative,second_most_negative);

	}
} else if(diff2 <= diff3) {

		console.log('closest pair',least_positive,most_negative);
}else {

	console.log('closest pair',most_negative,second_most_negative);
}



