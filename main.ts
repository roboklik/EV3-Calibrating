
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    sensors.color2.onLightDetected(LightIntensityMode.Reflected, Light.Dark, function () {
        brick.showString("dark", 2)
    })
    sensors.color2.onLightDetected(LightIntensityMode.Reflected, Light.Bright, function () {
        brick.showString("bright", 2)
    })
    console.sendToScreen()
    console.log("move color sensor")
    console.log("over DARK and BRIGHT color")
    console.log("and stop moving when done")
    console.log("press ENTER when ready")
    brick.buttonEnter.pauseUntil(ButtonEvent.Pressed)
    sensors.color2.calibrateLight(LightIntensityMode.Reflected)
    brick.showValue("dark", sensors.color3.threshold(Light.Dark), 2)
    brick.showValue("bright", sensors.color3.threshold(Light.Bright), 2)
    forever(function () {
        brick.showValue("reflected light", sensors.color3.light(LightIntensityMode.Reflected), 1)
    })

})



    // left -> reset
    brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
        sensors.gyro3.reset()
    })
    // enter -> calibrate
    brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
        sensors.gyro3.calibrate()
    })
    // right -> compute drift
    brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
        sensors.gyro3.computeDrift()
    })
    // instructions on how to use the buttons
    brick.showString("ENTER: calibrate", 7)
    brick.showString("       (reset+drift)", 8)
    brick.showString("LEFT: reset", 9)
    brick.showString("RIGHT: compute drift", 10)
    // this loop shows the rate, angle and drift of the
    // robot
    forever(function () {

    })
    // this loop shows wheter the sensor is calibrating
    forever(function () {
        brick.showString(sensors.gyro3.isCalibrating() ? "calibrating..." : "", 4)
    })

    /*
    PODPROGRAM ZA IZPIS POMEMBNIH VREDNOSTI SENZORJEV
    */
    forever(function () {

        brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
        brick.showNumber(sensors.color2.light(LightIntensityMode.Reflected), 2)
        brick.showValue("rate", sensors.gyro3.rate(), 3)
        brick.showValue("angle", sensors.gyro3.angle(), 4)
        brick.showValue("drift", sensors.gyro3.drift(), 5)

    })



