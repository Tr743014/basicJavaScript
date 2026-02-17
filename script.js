
// Current Counter function, Increase and Decrease Counter
function tickUp() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) - 1;
}


// Simple For Loop to print numbers from 0 to current counter value
function runForLoop() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 0; i <= counterValue; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}


// Repetition with Conditionals: Print Odd Numbers from 1 to current counter value
function showOddNumbers() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 1; i <= counterValue; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}


// Arrays for multiples of 5 dependent on current counter
function addMultiplesToArray() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let multiples = [];

    for (let i = 5; i <= counterValue; i += 5) {
        multiples.unshift(i); 
    }

    console.log(multiples); 
}


// Objects and Forms Field, carType, carMPG, carColor
function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}


// Load Car1, Car2, Car3 in the forms fields
function loadCar(carNumber) {
    let selectedCar;

    if (carNumber === 1) {
        selectedCar = carObject1;
    } else if (carNumber === 2) {
        selectedCar = carObject2;
    } else if (carNumber === 3) {
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}


// Changing the color of the paragraph text, Red, Green, Blue
function changeColor(colorChoice) {
    let paragraph = document.getElementById("styleParagraph");

    if (colorChoice === 1) {
        paragraph.style.color = "red";
    } else if (colorChoice === 2) {
        paragraph.style.color = "green";
    } else if (colorChoice === 3) {
        paragraph.style.color = "blue";
    }
}
