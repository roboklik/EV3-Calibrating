
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    sensors.color3.onLightDetected(LightIntensityMode.Reflected, Light.Dark, function () {
        brick.showString("dark", 2)
    })
    sensors.color3.onLightDetected(LightIntensityMode.Reflected, Light.Bright, function () {
        brick.showString("bright", 2)
    })
    console.sendToScreen()
    console.log("move color sensor")
    console.log("over DARK and BRIGHT color")
    console.log("and stop moving when done")
    console.log("press ENTER when ready")
    brick.buttonEnter.pauseUntil(ButtonEvent.Pressed)
    sensors.color3.calibrateLight(LightIntensityMode.Reflected)
    brick.showValue("dark", sensors.color3.threshold(Light.Dark), 4)
    brick.showValue("bright", sensors.color3.threshold(Light.Bright), 5)
    forever(function () {
        brick.showValue("reflected light", sensors.color3.light(LightIntensityMode.Reflected), 1)
    })

})



    // left -> reset
    brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
        sensors.gyro2.reset()
    })
    // enter -> calibrate
    brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
        sensors.gyro2.calibrate()
    })
    // right -> compute drift
    brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
        sensors.gyro2.computeDrift()
    })
    // instructions on how to use the buttons
    brick.showString("ENTER: calibrate", 7)
    brick.showString("       (reset+drift)", 8)
    brick.showString("LEFT: reset", 9)
    brick.showString("RIGHT: compute drift", 10)
    // this loop shows the rate, angle and drift of the
    // robot
    forever(function () {
        brick.showValue("rate", sensors.gyro2.rate(), 1)
        brick.showValue("angle", sensors.gyro2.angle(), 2)
        brick.showValue("drift", sensors.gyro2.drift(), 3)
    })
    // this loop shows wheter the sensor is calibrating
    forever(function () {
        brick.showString(sensors.gyro2.isCalibrating() ? "calibrating..." : "", 4)
    })




