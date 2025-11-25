import { map } from './map.js'
import { noise } from './noise.js';

let height = window.innerHeight;

export class Mountain {
    constructor(cMin, cMax, nMin, nMax, tI, lI) {
        this.time = Math.random() * 99;
        this.currentMin = cMin;
        this.currentMax = cMax;
        this.newMin = nMin;
        this.newMax = nMax;
        this.timeInterval = tI;
        this.lengthInterval = lI;
        this.mLength = 0;
    }

    getVertex() {
        // rectMode(CENTER);
        this.time += this.timeInterval;
        this.mLength += this.lengthInterval;
        var noiseValue = noise(this.time);
        var x = map(noiseValue, this.currentMin, this.currentMax, this.newMin, -window.innerHeight + this.newMax);
        // var x = map(noiseValue, this.currentMin, this.currentMax, this.newMin - window.innerHeight/4, -window.innerHeight);
        // vertex(this.mLength + 1, height - (-x));
        return [this.mLength + 1, height - (-x)];
    }
}
