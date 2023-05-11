radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("X", input.acceleration(Dimension.X) / 10)
    basic.pause(100)
    radio.sendValue("Y", input.acceleration(Dimension.Y) / 10)
    basic.pause(100)
})
