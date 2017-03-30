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


var bagelTypeArray = ["Cancel Order", "Superman", "Kimchi", "Banana-Split"];

var bagelToastArray = ["Cancel Order", "Burnt", "Lite", "None"];

var bagelSpreadArray = ["Cancel Order", "Funfetti", "Chocosplosion", "Salmon D-Lite"];

var menuArray = ["Make a Bagel", "Recently Made Bagels", "Exit Bagel Maker"]

var bagelsMade = [];


//Constructors******************






//Bagel Constructor

function Bagel(type, toast, spread, price) {
	this.type = type;
	this.toast = toast;
	this.spread = spread;
	this.price = price;
};


lastBagel = new Bagel("Kimchi", "Burnt", "Chocosplosion", 44.97)
bagelsMade.push(lastBagel);



//Functions******************


//Screen displayers
function bagelTypeMessage() {
	for (var i in bagelTypeArray) {
		console.log((parseInt(i)) + " " + bagelTypeArray[i]);
	}
};

function bagelToastMessage() {
	for (var i in bagelToastArray) {
		console.log((parseInt(i)) + " " + bagelToastArray[i]);
	}
};

function bagelSpreadMessage() {
	for (var i in bagelSpreadArray) {
		console.log((parseInt(i)) + " " + bagelSpreadArray[i]);
	}
};

function menuMessage() {
	for (var i in menuArray) {
		console.log((parseInt(i)+1) + " " + menuArray[i]);
	}
};

function mainMenu() {
	//options available to user

	wipeScreen();
	console.log("Welcome to the Exotic Bagel Maker\n");
	sleep(1000);
	menuMessage();
	userPrompt.question("\n", function(choice) {
		if (choice == 1) {
			makeABagel();
		} else if (choice == 2) {
			recallBagel();
		} else if (choice == 3) {
			process.exit();
		} else {
			console.log("Sorry, please enter 1, 2, or 3 to go back.");
			// sleep(2000);
			sleep(1000);
			mainMenu();
		}
	});
	//make a new bagel


	//check recently made bagels

	//exit bagel machine
}


function recallBagel() {
	//wipe screen and call out all stuff that was ordered previously
	wipeScreen();
	console.log("Most recently ordered bagels are at the bottom.\n");
	sleep(1000);
	for (var i in bagelsMade){
		console.log(" • "+bagelsMade[i].type + ", Toast: "+bagelsMade[i].toast+ ", with a "+bagelsMade[i].spread+". Total: $" +bagelsMade[i].price);
		sleep(500);
	}

	userPrompt.question("\nHit Enter to return.", function(entry) {
		mainMenu();
	});
}



//Make Bagel Feature
function makeABagel() {
	//new clean bagel to work with
	var bagelType;
	var bagelToast;
	var bagelSpread;
	var bagelPrice = 0.00;



	//start new bagel process
	wipeScreen();
	console.log("Let's make a Bagel!")
	sleep(1000);

	function selectionProcess1() {
		//var accumulatingPrice = 0.00


		//bagel selection
		//which bagel do you want?
		wipeScreen();
		console.log("What bagel type would you like?\n");
		bagelTypeMessage();
		userPrompt.question("\n", function(choice) {
			if (choice == 1) {
				bagelType = "Superman";
				bagelPrice += 44.99;
				selectionProcess2();
			} else if (choice == 2) {
				bagelType = "Kimchi";
				bagelPrice += 3.99;
				selectionProcess2();
			} else if (choice == 3) {
				bagelType = "Banana-Split";
				bagelPrice += 14.99;
				selectionProcess2();
			} else if (choice == 0) {
				mainMenu();
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
		wipeScreen();
		console.log("How would you like it toasted?\n");
		bagelToastMessage();
		userPrompt.question("\n", function(choice) {
			if (choice == 1) {
				bagelToast = "Burnt";
				bagelPrice += 6.99;
				selectionProcess3();
			} else if (choice == 2) {
				bagelToast = "Lite";
				bagelPrice += 8.99;
				selectionProcess3();
			} else if (choice == 3) {
				bagelToast = "None";
				bagelPrice += 50.99;
				selectionProcess3();
			} else if (choice == 0) {
				mainMenu();
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
		wipeScreen();
		console.log("Finally, what spread would you like?\n");
		bagelSpreadMessage();
		userPrompt.question("\n", function(choice) {
			if (choice == 1) {
				bagelSpread = "Funfetti";
				bagelPrice += 8.99;
				finalProcess();
			} else if (choice == 2) {
				bagelSpread = "Chocosplosion";
				bagelPrice += 33.99;
				finalProcess();
			} else if (choice == 3) {
				bagelSpread = "Salmon D-Lite";
				bagelPrice += 3.99;
				finalProcess();
			} else if (choice == 0) {
				mainMenu();
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
		wipeScreen();
		console.log("Alright so here's your order...\n");
		sleep(1000);
		console.log("Bagel: " + bagelType + " / Toasted: " + bagelToast + " / With a " + bagelSpread + " spread.");
		sleep(1000);
		//Your total will be... $$$
		//sleep(1000);
		//Are you sure you want to toast this?
		userPrompt.question("\nIs this correct? [y/n]\n\n", function(entry) {
			if (entry == "y") {
				bagelPrice = bagelPrice.toFixed(2);
				//Toasting...
				var userBagel = new Bagel(bagelType, bagelToast, bagelSpread, bagelPrice);
				bagelsMade.push(userBagel);
				sleep(1000);
				wipeScreen();
				console.log("Thank you, that will be $"+bagelPrice);
				sleep(1000);
				sleep(1000);
				console.log("...Ding! Bagel's done. Please enjoy!");
				sleep(2000);
				sleep(1000);
				mainMenu();
			} else if (entry == "n" ) {
				//Either start over, change something specific, or quit.
				console.log("Ok then we won't make it jeez.");
				sleep(1000);
				mainMenu();
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
// makeABagel();
mainMenu();








