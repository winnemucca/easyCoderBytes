// var addNumbers(string){



// }
// console.log(addNumbers('88Hello 3 World!') );


// var palindrome= function(string){
// 	for(var i=0; i<string.length/2; i++){
// 		if(string[i] !== string[string.length-1-i]){
// 			return false;

// 		}

// 	}
// 	return true;
// }
// console.log(palindrome('racecar'));
// console.log(palindrome('egotistical'));


// var palindrome= function(string){
// for (var i=0;i< string.length; i++){
// 	if(string[i]!== string[string.length-1-i]){
// 		return false;
// 	}
// }
// 	return true;
// }
// console.log(palindrome('racecar'));
// console.log(palindrome('hopscotch'));


// my effort
// var dashInsert = function(number){
// 		var numbstring= number.toString().split('');

// 		var odd = function(d){
// 			return d % 2 === 1;
// 		}
// 	var output = numbstring[0];

// 	var oddDigitFound = odd(numbstring[0]);
// 	for (var i=0;i <numbstring.length;i++){
// 		if(odd(numbstring[0])) {

// 			if(oddDigitFound){
// 				output += '-';
// 			}

// 			else{
// 				odd = true;
// 			}

// 		}

// 		else{
// 			odd = false;
// 		}

// 		output +=numbstring[i];
// 	}
// 	return output;
// }
// console.log(dashInsert('88Hello'));


var dashInsert = function(n) {
	var numStr = n.toString();
	var isOdd = function(d) { return d % 2 === 1; };

	// initialize the output with the first digit
	var output = numStr[0];

	// initialize oddDigitFound with whether the first digit is odd
	var oddDigitFound = isOdd(numStr[0]);

	for(var i=1; i<numStr.length; i++) {
		// check if the current digit is odd
		if(isOdd(numStr[i])) {

			// if the last digit was odd, insert a dash before the current digit
			if(oddDigitFound) {
				output += '-';
			}
			// otherwise, set oddDigitFound in case the next digit is odd
			else {
				oddDigitFound = true;
			}
		}
		// if it's not, reset the oddDigitFound flag to false
		else {
			oddDigitFound = false;
		}

		// add the current digit to the output string
		output += numStr[i];
	}

	return output;
}
console.log(dashInsert('88777532'));










