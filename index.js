
// Step 1: Define a function to prompt the user for froyo flavors

function promptForFlavors() {
  const userInput = prompt('Enter a list of comma-separated froyo flavors:');
  console.log(userInput);
  return userInput;
}



// Step 2: parse the user input into an array of froyo flavors

function parseFlavors(input) {
  const flavorsArray = userInput.split(',').map(flavor => flavor.trim());
  console.log(flavorsArray);
  return flavorsArray
}
const userInput = promptForFlavors()

parseFlavors()

// Step 3: build an object to track which flavors you have observed so far

function trackFlavors(flavorsArray) {
  const flavorCounts = {};

}





