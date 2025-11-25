import { Color } from "./color";

export class Star {
    constructor(x, y) {
        this.xPos = x;
        this.yPos = y;
    }

    draw() {
        let randSize = random(3);
        var canvas = document.getElementById('landscape');
        var ctx = canvas.getContext('2d');
        // fill(255, 255, 255, random(0, 200));
        // ctx.fillStyle = new Color(255, 255, 255, random(0, 200)).rgba();
        ctx.fillStyle = new Color(255, 255, 255, Math.random()).rgba();
        // ellipse(this.xPos, this.yPos, randSize, randSize);
        ctx.beginPath();
        ctx.ellipse(this.xPos, this.yPos, randSize, randSize, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function random(max) {
  return Math.floor(Math.random() * max);
}
