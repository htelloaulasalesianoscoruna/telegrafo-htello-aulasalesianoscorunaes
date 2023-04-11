input.onButtonPressed(Button.A, function () {
    letra = "" + letra + "."
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(letra)
    letra = ""
})
radio.onReceivedString(function (receivedString) {
    if (".---" == receivedString) {
        basic.showString("J")
    } else if ("-.-" == receivedString) {
        basic.showString("K")
    } else if (".-.." == receivedString) {
        basic.showString("L")
    } else if ("--" == receivedString) {
        basic.showString("M")
    } else if ("-." == receivedString) {
        basic.showString("N")
    } else if ("---" == receivedString) {
        basic.showString("O")
    } else if (".--." == receivedString) {
        basic.showString("P")
    } else if ("--.-" == receivedString) {
        basic.showString("Q")
    } else if (".-." == receivedString) {
        basic.showString("R")
    } else if ("..." == receivedString) {
        basic.showString("S")
    } else if ("-" == receivedString) {
        basic.showString("T")
    } else if ("..-" == receivedString) {
        basic.showString("U")
    } else if ("...-" == receivedString) {
        basic.showString("V")
    } else if (".--" == receivedString) {
        basic.showString("W")
    } else if ("-..-" == receivedString) {
        basic.showString("X")
    } else if ("-.--" == receivedString) {
        basic.showString("Y")
    } else if ("--.." == receivedString) {
        basic.showString("Z")
    } else if (".-" == receivedString) {
        basic.showString("A")
    } else if ("-..." == receivedString) {
        basic.showString("B")
    } else if ("-.-." == receivedString) {
        basic.showString("C")
    } else if ("-.." == receivedString) {
        basic.showString("D")
    } else if ("." == receivedString) {
        basic.showString("E")
    } else if ("..-." == receivedString) {
        basic.showString("F")
    } else if ("--." == receivedString) {
        basic.showString("G")
    } else if ("...." == receivedString) {
        basic.showString("H")
    } else if (".." == receivedString) {
        basic.showString("I")
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    letra = "" + letra + "-"
})
let letra = ""
radio.setGroup(1)
letra = ""
