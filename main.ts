let Pixel = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let item = 0
basic.forever(function () {
    basic.pause(100)
    Pixel.setPixelColor(item, neopixel.colors(NeoPixelColors.Purple))
    if (item < 24) {
        item += 1
        Pixel.show()
        Pixel.clear()
    } else if (item >= 24) {
        item = 0
    }
})
