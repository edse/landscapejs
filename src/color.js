export class Color {
    constructor(r, g, b, a=1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

        this.rgb = `rgb()`
    }
     
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
     
    rgba() {
        return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }
}
