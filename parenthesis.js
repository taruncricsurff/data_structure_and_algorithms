var c = ['{','{','{','(',')','{','}','[',']','}','}','}','{','}'];

console.log(c.length);


var stack = [];
var flag =0;
var length = 0;



c.forEach(function(bracket){

	if(bracket == '(' || bracket == '[' || bracket == '{'){

		stack.push(bracket);
		++ length;
	}


	else if (length <= 0 && (bracket == '}'  || bracket ==']' || bracket == ')'))
				length =  length-1;

	else {

	var pop = stack[length-1];

	if(bracket == ')')
		bracket ='(';

	if(bracket == '}')
		bracket ='{';

	if(bracket == ']')
		bracket = '[';


	 if (pop == bracket ) {

			stack.pop();
			length = length -1;

		}
	}
	console.log(stack);

});



if(length == 0)
	console.log('balanced');
else
	console.log('not balanced');






