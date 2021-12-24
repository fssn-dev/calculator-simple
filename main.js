"use strict"

const DISPLAY = document.getElementById("display")

const ZERO = document.getElementById("zero")
const ONE = document.getElementById("one")
const TWO = document.getElementById("two")
const THREE = document.getElementById("three")
const FOUR = document.getElementById("four")
const FIVE = document.getElementById("five")
const SIX = document.getElementById("six")
const SEVEN = document.getElementById("seven")
const EIGHT = document.getElementById("eight")
const NINE = document.getElementById("nine")

const DIVIDE = document.getElementById("divide")
const MULTIPLY = document.getElementById("multiply")
const SUBTRACT = document.getElementById("subtract")
const SUM = document.getElementById("sum")

const DOT = document.getElementById("dot")
const CE = document.getElementById("clear")
const EQUAL = document.getElementById("equal")

const VALUE_HOLDER = [undefined, undefined]
Object.seal(VALUE_HOLDER)

let operationPrimer

CE.addEventListener("click", () => {
    DISPLAY.innerText = ""
    VALUE_HOLDER[0] = undefined
    VALUE_HOLDER[1] = undefined
})

ZERO.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

ONE.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

TWO.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

THREE.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

FOUR.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

FIVE.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

SIX.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

SEVEN.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

EIGHT.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

NINE.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

DOT.addEventListener("click", (pointerEvent) => {

    numberLogic(pointerEvent)

})

DIVIDE.addEventListener("click", () => {

    operatorLogic()

    DISPLAY.innerText = ""
    operationPrimer = "/"

})

MULTIPLY.addEventListener("click", () => {

    operatorLogic()

    DISPLAY.innerText = ""
    operationPrimer = "*"

})

SUBTRACT.addEventListener("click", () => {

    operatorLogic()

    DISPLAY.innerText = ""
    operationPrimer = "-"

})

SUM.addEventListener("click", () => {

    operatorLogic()

    DISPLAY.innerText = ""
    operationPrimer = "+"

})

EQUAL.addEventListener("click", () => {

    operatorLogic()

    if (!!mathSelect(operationPrimer)) {
        DISPLAY.innerText = mathSelect(operationPrimer)
    } else {
        DISPLAY.innerText = "ERROR"
    }
})

function operatorLogic() {

    if (VALUE_HOLDER[0] == undefined) {
        VALUE_HOLDER[0] = DISPLAY.innerHTML

    } else if (VALUE_HOLDER[1] == undefined) {
        VALUE_HOLDER[1] = DISPLAY.innerHTML

    } else {
        VALUE_HOLDER[0] = DISPLAY.innerText
        VALUE_HOLDER[1] = undefined
    }
}

function numberLogic(pointerEvent) {

    if (DISPLAY.innerText == "ERROR") {
        return

    } else if (DISPLAY.innerText.length >= 13) {
        DISPLAY.innerText = "ERROR"

    } else {
        DISPLAY.innerText += pointerEvent.path[0].innerText
    }
}

function mathSelect(operationPrimer) {
    switch (operationPrimer) {

        case "/":
            return Number(VALUE_HOLDER[0]) / Number(VALUE_HOLDER[1])

        case "*":
            return Number(VALUE_HOLDER[0]) * Number(VALUE_HOLDER[1])

        case "-":
            return Number(VALUE_HOLDER[0]) - Number(VALUE_HOLDER[1])

        case "+":
            return Number(VALUE_HOLDER[0]) + Number(VALUE_HOLDER[1])

    }
}