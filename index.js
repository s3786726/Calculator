let currentNumber = []
let screen = document.getElementById("screen")
let setOfNumbers = []
var isPlusClicked = true
let symbolClicked = []

function addOneToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(1)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addTwoToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(2)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addThreeToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(3)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addFourToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(4)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addFiveToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(5)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addSixToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(6)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addSevenToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(7)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addEightToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(8)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addNineToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(9)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function addZeroToCurrent() {
    if (isPlusClicked == false){
        screen.textContent = "ERROR"
    } else {
        currentNumber.push(0)
        screen.innerHTML = currentNumber.join("")
    }
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
}

function minus() {
    if (currentNumber.length >= 1) {
        setOfNumbers.push(currentNumber)
        currentNumber = []
    }
    
    isPlusClicked = true
    symbolClicked.push("minus")
}

function plus() {
    if (currentNumber.length >= 1) {
        setOfNumbers.push(currentNumber)
        currentNumber = []
    }
    
    isPlusClicked = true
    symbolClicked.push("plus")
    // for (i=0; i<=currentNumber.length; i++){
    //     console.log(currentNumber)}
    // for (j=0; j<=setOfNumbers.length; j++){
    //     console.log(setOfNumbers)}
}

// function equals() {
//     setOfNumbers.push(currentNumber)
//     var finalNumber = 0
    
//     for (i=0; i<setOfNumbers.length; i++){
//         console.log(setOfNumbers[i])
//         let number = setOfNumbers[i].toString()
//         console.log(number)
//         number = number.replaceAll(",","")
//         console.log(number)
//         number = parseInt(number)
//         console.log(number)
//         finalNumber += number 

//     }
//     screen.textContent = finalNumber
//     isPlusClicked = false
// }

function equals() {
    console.log(symbolClicked[0])
    setOfNumbers.push(currentNumber)
    let allNumbers = []
    var finalNumber = 0
    
    for (let i=0; i<setOfNumbers.length; i++){
        let number = setOfNumbers[i].toString()
        number = number.replaceAll(",","")
        number = parseInt(number)
        allNumbers.push(number)
    }

    if (symbolClicked[0] === "plus") {
        finalNumber = allNumbers[0] + allNumbers[1]
        console.log(finalNumber)
    } else {
        finalNumber = allNumbers[0] - allNumbers[1]
    }

    if (symbolClicked.length > 1){
        for (let j=1; j<symbolClicked.length; j++) {
            if (symbolClicked[j] === "plus") {
                finalNumber += allNumbers[j+1]
            } else {
                finalNumber += allNumbers[j+1]

            }
    }
    }
    console.log(finalNumber)
    screen.textContent = finalNumber 
    currentNumber = []
    isPlusClicked = false

}

function escape() {
    setOfNumbers = []
    currentNumber = []
    symbolClicked = []
    screen.textContent = "000000"
    isPlusClicked = true
}