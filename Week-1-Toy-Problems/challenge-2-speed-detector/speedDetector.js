function speedDetector(speed) {
    if (speed < 70) {
        console.log("Ok");
    }

    let points = Math.floor((speed - 70) / 5);
    
    if (points > 12) {
        console.log("License suspended");
        console.log("Points: " + points);
    }
}
