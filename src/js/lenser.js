var defaultSensorWidth = 36; //Sensor width in mm--in this case 35mm film or a full frame digital sensor
var defaultImageFocalLength = 24; // Focal length of our default app image, in mm

function calcFOV(focalLength, sensorWidth) {
    /* Calculate horizontal field of view (FOV) in degrees */
    return 2 * Math.atan(sensorWidth / (2 * focalLength)) * (180 / Math.PI)
}

function calcScaleFactor(originalFOV, newFOV) {
    return originalFOV / newFOV;
}

function focalLengthChanged() {
    const focalLength = document.getElementById("lenser-focal-len-slider").value;
    var focalLenDisp = document.getElementById("lenser-focal-len-display");
    var lenserAppImg = document.getElementById("lenser-crop-view");

    newFOV = calcFOV(focalLength, defaultSensorWidth);
    scaleFactor = calcScaleFactor(
        calcFOV(defaultImageFocalLength, defaultSensorWidth),
        newFOV
    );
    
    focalLenDisp.innerText = focalLength;
    lenserAppImg.style.transform = "scale(" + scaleFactor + ")";
    /*lenserAppImg.style.transform = "scale(" + focalLength + ")";*/
    console.log(focalLength + "mm; " + newFOV + "deg; " + scaleFactor + "x");
}

focalLengthChanged();
document.getElementById("lenser-focal-len-slider").addEventListener("input", focalLengthChanged);