class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); 
    }
}
