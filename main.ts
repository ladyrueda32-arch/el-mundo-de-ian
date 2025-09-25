basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
