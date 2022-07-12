// An array of months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// A function to take input from user
function takeInput() {
	// Prompt the user to enter a number between 1 to 12
	const inputNumber = prompt("Enter a number (1-12): ");

	// if number is less than 1 or greater than 12 then alert the user that its an invalid number
	if (inputNumber < 1 || inputNumber > 12) {
		alert("Its an invalid number!!");
	} 
	// else in the console log the number and its corresponding month
	else {
		console.log(inputNumber,"-", months[inputNumber - 1]);
	}
	// Prompt the user to take input again
	takeInput();
}


// Ask the user to input a number
takeInput()