input.onButtonPressed(Button.A, function () {
    letter = letter + 1
})
input.onButtonPressed(Button.AB, function () {
    if (letter == 1) {
        radio.sendString("a")
    }
    if (letter == 2) {
        radio.sendString("b")
    }
    if (letter == 3) {
        radio.sendString("c")
    }
    if (letter == 4) {
        radio.sendString("d")
    }
    if (letter == 5) {
        radio.sendString("e")
    }
    if (letter == 6) {
        radio.sendString("f")
    }
    if (letter == 7) {
        radio.sendString("g")
    }
    if (letter == 8) {
        radio.sendString("h")
    }
    if (letter == 9) {
        radio.sendString("i")
    }
    if (letter == 10) {
        radio.sendString("j")
    }
    if (letter == 11) {
        radio.sendString("k")
    }
    if (letter == 12) {
        radio.sendString("l")
    }
    if (letter == 13) {
        radio.sendString("m")
    }
    if (letter == 14) {
        radio.sendString("n")
    }
    if (letter == 15) {
        radio.sendString("o")
    }
    if (letter == 16) {
        radio.sendString("p")
    }
    if (letter == 17) {
        radio.sendString("q")
    }
    if (letter == 17) {
        radio.sendString("r")
    }
    if (letter == 18) {
        radio.sendString("s")
    }
    if (letter == 19) {
        radio.sendString("t")
    }
    if (letter == 20) {
        radio.sendString("u")
    }
    if (letter == 21) {
        radio.sendString("v")
    }
    if (letter == 22) {
        radio.sendString("w")
    }
    if (letter == 23) {
        radio.sendString("x")
    }
    if (letter == 24) {
        radio.sendString("y")
    }
    if (letter == 25) {
        radio.sendString("z")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    letter = letter - 1
})
let letter = 0
radio.setGroup(1)
basic.forever(function () {
    if (letter == 11) {
        basic.showString("k")
    }
})
basic.forever(function () {
    if (letter == 12) {
        basic.showString("l")
    }
})
basic.forever(function () {
    if (letter == 13) {
        basic.showString("m")
    }
})
basic.forever(function () {
    if (letter == 14) {
        basic.showString("n")
    }
})
basic.forever(function () {
    if (letter == 15) {
        basic.showString("o")
    }
})
basic.forever(function () {
    if (letter == 1) {
        basic.showString("a")
    }
})
basic.forever(function () {
    if (letter == 16) {
        basic.showString("p")
    }
})
basic.forever(function () {
    if (letter == 17) {
        basic.showString("q")
    }
})
basic.forever(function () {
    if (letter == 2) {
        basic.showString("b")
    }
})
basic.forever(function () {
    if (letter == 8) {
        basic.showString("h")
    }
})
basic.forever(function () {
    if (letter == 18) {
        basic.showString("r")
    }
})
basic.forever(function () {
    if (letter == 19) {
        basic.showString("s")
    }
})
basic.forever(function () {
    if (letter == 6) {
        basic.showString("f")
    }
})
basic.forever(function () {
    if (letter == 20) {
        basic.showString("t")
    }
})
basic.forever(function () {
    if (letter == 4) {
        basic.showString("d")
    }
})
basic.forever(function () {
    if (letter == 21) {
        basic.showString("u")
    }
})
basic.forever(function () {
    if (letter == 22) {
        basic.showString("v")
    }
})
basic.forever(function () {
    if (letter == 5) {
        basic.showString("e")
    }
})
basic.forever(function () {
    if (letter == 23) {
        basic.showString("w")
    }
})
basic.forever(function () {
    if (letter == 3) {
        basic.showString("c")
    }
})
basic.forever(function () {
    if (letter == 25) {
        basic.showString("y")
    }
})
basic.forever(function () {
    if (letter == 24) {
        basic.showString("x")
    }
})
basic.forever(function () {
    if (letter == 26) {
        basic.showString("z")
    }
})
basic.forever(function () {
    if (letter == 9) {
        basic.showString("i")
    }
})
basic.forever(function () {
    if (letter == 7) {
        basic.showString("g")
    }
})
basic.forever(function () {
    if (letter == 10) {
        basic.showString("j")
    }
})
basic.forever(function () {
	
})
