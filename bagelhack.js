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


var bagelTypeArray = {
	1: "Superman", 
	2: "Kimchi",
	3: "Banana-Split"
};

var bagelToastArray = {
	1: "Burnt", 
	2: "Lite",
	3: "None"
};

var bagelSpreadArray = {
	1: "Funfetti", 
	2: "Chocosplosion",
	3: "Salmon D-Lite"
};

var bagelsMade = [];


//Constructors******************






//Bagel Constructor

function Bagel(bagelType, toast, spread, price) {
	this.bagelType = bagelType;
	this.toast = toast;
	this.spread = spread;
	this.price = price;
};







//Functions******************

function bagelTypeMessage() {
	for (var i in bagelTypeArray) {
		console.log((i) + " " + bagelTypeArray[i]);
	}
};

function bagelToastMessage() {
	for (var i in bagelToastArray) {
		console.log((i) + " " + bagelToastArray[i]);
	}
};

function bagelSpreadMessage() {
	for (var i in bagelSpreadArray) {
		console.log((i) + " " + bagelSpreadArray[i]);
	}
};

function makeABagel() {
	var bagelType;
	var bagelToast;
	var bagelSpread;
	function selectionProcess1() {
		//var accumulatingPrice = 0.00


		//bagel selection
		//which bagel do you want?
		bagelTypeMessage();
		userPrompt.question("", function(bagelType) {
			if (bagelType == 1) {
				bagelType = "Superman";
				selectionProcess2();
			} else if (bagelType == 2) {
				bagelType = "Kimchi";
				selectionProcess2();
			} else if (bagelType == 3) {
				bagelType = "Banana-Split";
				selectionProcess2();
			} else if (bagelType == 0) {
				//leave this part go back to menu
			} else {
				console.log("Sorry, please enter 1, 2, 3, or 0 to go back.");
				// sleep(2000);
				sleep(1000);
				selectionProcess1();
			}
		});
	};

	function selectionProcess2() {
		//var accumulatingPrice = 0.00


		//toast selection
		//which toast type do you want?
		bagelToastMessage();
		userPrompt.question("", function(bagelToast) {
			if (bagelToast == 1) {
				bagelToast = "Burnt";
				selectionProcess3();
			} else if (bagelToast == 2) {
				bagelToast = "Lite";
				selectionProcess3();
			} else if (bagelToast == 3) {
				bagelToast = "None";
				selectionProcess3();
			} else if (bagelToast == 0) {
				//leave this part go back to menu
			} else {
				console.log("Sorry, please enter 1, 2, 3, or 0 to go back.");
				// sleep(2000);
				sleep(1000);
				selectionProcess2();
			}
		});
	};

	function selectionProcess3() {
		//var accumulatingPrice = 0.00


		//spread selection
		//which spread do you want?
		bagelSpreadMessage();
		userPrompt.question("", function(bagelSpread) {
			if (bagelSpread == 1) {
				bagelSpread = "Funfetti";
				finalProcess();
			} else if (bagelSpread == 2) {
				bagelSpread = "Chocosplosion";
				finalProcess();
			} else if (bagelSpread == 3) {
				bagelSpread = "Salmon D-Lite";
				finalProcess();
			} else if (bagelSpread == 0) {
				//leave this part go back to menu
			} else {
				console.log("Sorry, please enter 1, 2, 3, or 0 to go back.");
				// sleep(2000);
				sleep(1000);
				selectionProcess3();
			}
		});
	};

	function finalProcess() {
		//Here's what you have
		console.log("Alright so here's your order...");
		sleep(1000);
		console.log("Bagel:" + bagelType + " / Toasted: " + bagelToast + " / With a " + bagelSpread + " spread.");
		sleep(1000);
		//Your total will be... $$$
		//sleep(1000);
		//Are you sure you want to toast this?
		userPrompt.question("Is this correct? [y/n]", function(entry) {
			if (entry == "y") {
				//Toasting...
				userBagel = new Bagel(bagelType, bagelToast, bagelSpread);
				sleep(1000);
				console.log("...Ding! Bagel's done. Please enjoy!");
				console.log(userBagel);
			} else if (entry == "n" ) {
				//Either start over, change something specific, or quit.
				console.log("Ok then we won't make it jeez.");
				process.exit();
			} else {
				console.log("Sorry, please enter y or n.");
				sleep(1000);
				finalProcess();
			} 
		});
		//Here's your bagel!
	};
	selectionProcess1();
};



//Pseudo*******************


	//toast selection
	//How dark/lite do you want it to be toasted?

	//spread selection
	//What bagelType of spread do you want on it?
	//salmon += accumulatingPrice += 4.99

	//compile price?

	//yourBagel = new Bagel(Xx,xx,xx,accumulatingPrice)

//Runners******************


// bagelSelectMessage();
makeABagel();








