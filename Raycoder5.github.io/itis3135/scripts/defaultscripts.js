// Gets the current date and time of the user's computer.
function getTheDate() {
    const date = new Date();
    console.log(date);
    document.getElementById("returnDate").textContent = "Today is " + date;
}

// Greets the user by their name and how they are feeling.
function greeting() {
    var userName = document.getElementById("name").value;
    var userFeeling = document.getElementById("how-you-are-doing").value;
    document.getElementById("returnGreeting").innerHTML = "The Thompson Design Enterprises welcomes you, " + 
    userName + "! We're glad you are doing " + userFeeling + "!";
}

// Returns an alert with the appropriate shape based on the input of 1-10.
function getShape() {
    var userNumber = Math.abs(Math.round(document.getElementById("favorite-number").value));
    if(userNumber == 1) {
        alert("henagon");
    }
    else if(userNumber == 2) {
        alert("digon");
    }
    else if(userNumber == 3) {
        alert("trigon");
    }
    else if(userNumber == 4) {
        alert("tetragon");
    }
    else if(userNumber == 5) {
        alert("pentagon");
    }
    else if(userNumber == 6) {
        alert("hexagon");
    }
    else if(userNumber == 7) {
        alert("heptagon");
    }
    else if(userNumber == 8) {
        alert("octagon");
    }
    else if(userNumber == 9) {
        alert("enneagon");
    }
    else if(userNumber == 10) {
        alert("decagon");
    }
}

// Funtion for tanuki table flip (they are very roudy)
function tanukiTableFlip() {
    alert(" ʕノ•ᴥ•ʔノ ︵ ┻━┻ ");
}

// Function for tanuki joke (they are very sneaky)
function tanukiJoke() {
    alert("What do you call a raccoon who sun tans all day? A TANUKI!");
}

// Function for tanuki insult (they can be mean at times)
function tanukiInsult() {
    var userName = document.getElementById("name").value;
    var userFeeling = document.getElementById("how-you-are-doing").value;
    alert(userName + " I don't like that you are feeling " + userFeeling + " I hope you feel WORSE!")
}

// Function for tanuki color change (they shape shift in Japanese folklore)
function tanukiColorChange() {
    document.getElementById("content-box").style.backgroundColor = "#dc143c";
}

// Function that reverts the color back to the original background (they can be sweet animals too)
function tanukiColorRevert() {
    document.getElementById("content-box").style.backgroundColor = "black";
}