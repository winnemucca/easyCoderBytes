function ArithGeo(arr) { 

var diff = arr[1] - arr[0];
var ratio = arr[1] / arr[0];

var arith = true;
var geo = true;

for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== diff )
      arith = false;
    if(arr[i + 1] / ratio !== arr[i])
      geo = false;
}

if(arith === true)
    return "arithmetic";
else if(geo === true)
    return" geometric";
else
    return -1;
}
console.log('#1',ArithGeo(1,2,4,6,8));


function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  // g makes it search the entire string i makes it case sensative
  return m === null ? 0 : m.length;
}
console.log('#2',getVowels('what the cuss'));

function ExHo(str){
	var ex = str.match(/[x]/gi);
	var oh = str.match(/[o]/gi);

	if(ex === null || oh === null){
		return false
	}
	else{
		return ex.length === oh.length;
	}

}
console.log('#3',ExHo('xoxo'));

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log('#4',longestWord("pride and prejudice"));



function firstFactorial(sum) {
  if(sum ==0) {
    return 1;
  }
  if(sum < 0) {
    return undefined;
  }
  return sum *firstFactorial(sum - 1);
}
console.log('#5',firstFactorial(4))


function FirstFactorial(num) { 
  var nNum=1;
  for (var i=1;i<=num;i++) {
    nNum*=i;
  }
  return nNum
}
console.log(FirstFactorial(4))


function TimeConvert(num) { 

  // code goes here
  var hours = parseInt(num/60);
  var minutes = num%60;
  var time = hours + ':'+minutes;
  return time.toString(); 
         
}

console.log(TimeConvert(230));