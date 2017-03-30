//Tools******************

//instantiate the input/output system
var userInput = require('readline');
var userPrompt = userInput.createInterface(process.stdin, process.stdout);

/* User Question Code...

userPrompt.question("", function(entry) {

});

*/


//sleep function
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

//wipe  screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};

//Variables******************


//Bagel base


var bagelArray = {
	superman:"1) Superman", 
	kimchi: "2) Kimchi",
	bananasplit: "3) Banana-Split"
}


var bagelsMade = [];


//Constructors******************






//Bagel Constructor

function Bagel(bagelType, spread, toast, price) {
	this.bagelType = bagelType;
	this.spread = spread;
	this.toast = toast;
	this.price = price;
}







//Functions******************

function bagelSelectMessage() {
	for (var i in bagelArray) {
		console.log(bagelArray[i]);
	}
}


function selectionProcess1() {
	//var accumulatingPrice = 0.00


	//bagel selection
	//which bagel do you want?
	bagelSelectMessage();
	userPrompt.question("", function(bagelType) {
		//person chooses superman type
		if (bagelType == 1) {
			bagelType = "Superman";
			// selectionProcess2();
		} else if (bagelType == 2) {
			bagelType = "Kimchi";
			// selectionProcess2();
		} else if (bagelType == 3) {
			bagelType = "Banana-Split";
			// selectionProcess2();
		} else if (bagelType == 0) {
			//leave this part go back to menu
		} else {
			console.log("Sorry, please enter 1, 2, 3, or 0 to go back.");
			// sleep(2000);
			sleep(1000);
			selectionProcess1();
		}


	});

	//toast selection
	//How dark/lite do you want it to be toasted?

	//spread selection
	//What bagelType of spread do you want on it?
	//salmon += accumulatingPrice += 4.99

	//compile price?

	//yourBagel = new Bagel(Xx,xx,xx,accumulatingPrice)

}



//Runners******************


// bagelSelectMessage();
selectionProcess1();








