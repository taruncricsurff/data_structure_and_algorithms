
var position = [0,0,0,0,0,0,0,0];

function attack(position,index) {

	//console.log('attack called',position,index)

	for(let i=0;i<index;++i) {

		for(let j=i+1;j<index;++j) {

			if(j != i) {

				if( (position[j]==position[i]) || (position[j] == position[i] + j-i) || (position[j] == position[i] -(j-i))) {

					return 1;
				}		
			}
		}
	}

	return 0;
}

 var solutions = 0;

function _8queen(position,index) {

	if(index == 8) {
		
		++ solutions;
		console.log(position);
		return;
	}

	for(let i=0;i<8;++i){

		position[index] = i;

		if(!attack(position,index+1))

			_8queen(position,index+1);

	}
}


_8queen(position,0);
console.log('solutions',solutions);


//console.log(attack(position,8));