let num1 = 0
let num2 = 0
let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

// Initialize the display
num1El.textContent = num1
num2El.textContent = num2

function addHomeOne() {
    num1 += 1
    num1El.textContent = num1
}

function addHomeTwo() {
    num1 += 2
    num1El.textContent = num1
}

function addHomeThree() {
    num1 += 3
    num1El.textContent = num1
}

function addGuestOne() {
    num2 += 1
    num2El.textContent = num2
}

function addGuestTwo() {
    num2 += 2
    num2El.textContent = num2
}

function addGuestThree() {
    num2 += 3
    num2El.textContent = num2
}

function clearHomeCount() {
    num1El.textContent = 0
    num1 = 0
}

function clearGuestCount() {
    num2El.textContent = 0
    num2 = 0
}