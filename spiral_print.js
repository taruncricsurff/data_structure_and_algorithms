/*********************************spiral printing of array*************************************                          */




var c = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[-2,-3,-4,-5,-6]];


var row= 6;
var columns = 5;





let start=0,end=columns;

while(start<= parseInt(row/2) ) {


	//prints from left ro right 	
	for(j=start;j<end;++j) {

			//console.log(start,j);

		console.log(c[start][j]);
		
}



console.log('-------------');

	//prints from top to down

for(j=start+1;j<end-1;++j) {


		console.log(c[j][end -1]);
		
}


console.log('-------------');






if( start!= parseInt(row/2)    ) {
		console.log('prints from right to left',row-start-1,row,start);


for(j=end-1;j>=start;--j) {

		console.log(c[row-start-1][j]);

}
}
console.log('-------------');


//prints from bottom to up

for(j=row-start-2;j>start;--j) {


		console.log(c[j][start]);
		
}

console.log('-------------');

	++ start;
	--end;
}