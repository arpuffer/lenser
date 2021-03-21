function focalLengthChanged() {
    const focalLength = document.getElementById("focal-len-slider").value;
    var focalLenDisp = document.getElementById("focal-len-display");
    focalLenDisp.innerText = focalLength;
    console.log("Focal length changed to " + focalLength + "mm");
}

focalLengthChanged();
document.getElementById("focal-len-slider").addEventListener("input", focalLengthChanged);