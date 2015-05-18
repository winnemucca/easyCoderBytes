var hotel = {
	name: 'quay',
	rooms: 40,
	booked: 25,
	checkAvailability: function(){
	return this.rooms - this.booked;
	}
};

// var elName = document.getElementById('hotelName');
// elName.textContent = hotel.name;

// var elRooms =document.getElementById('rooms');
// elRooms.textContent =hotel.checkAvailability();


// object constructors  hey hey hey
// figure out how
// this can work when using 
// icons

//  function Hotel(name, rooms, booked) {

//  	this.name = name;
//  	this.rooms = rooms;
//  	this.booked= booked;

//  	this.checkAvailability = function(){
//  		return this.rooms - this.booked;
//  	}
//  }

//  var parkHotel = new Hotel ('Park', 120, 77);
//  parkHotel.gym = true;
//  parkHotel.pool = false;
//  var weston = new Hotel ('The Weston', 300, 189);

// var width = 600;
// var shape = { width: 300}

// var showWidth = function() {
// 	document.write(this.width);
// };
// shape.getWidth = showWidth;
// shape.getWidth();


// var costs = {

// room1: [420, 40,10],
// room2: [460, 20, 20]

// };


// var saying= 'Home sweet home';

// var hope = function(string){

// seperate = string.slice(5,-2);
// return seperate.split('');


// };
// console.log(hope('home sweet home'));






var congratulate = function(score) {
	if(score >= 50) {
	return ' proceed to the next level.';
	}else {
		return 'have fun being you!';
	}	
}
console.log(congratulate(100));

console.log(congratulate(10));






