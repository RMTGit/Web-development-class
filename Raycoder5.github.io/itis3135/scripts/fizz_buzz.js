// Sets fizzBuzzContent to the contents of the div with the same id name.
const fizzBuzzContent = document.getElementById("fizzBuzzContent");

// For loop that spits out the fizz, buzz, and bang.
for (let i = 1; i <= 110; i++) {
    let str = "";
    if (i % 3 === 0) {
        str += "fizz";
    }
    if (i % 5 === 0) {
        str += "buzz";
    }
    if (i % 7 === 0) {
        str += "BANG!";
    }
    if (str === "") {
        str = i;
    }
    fizzBuzzContent.textContent += str + ", ";
}