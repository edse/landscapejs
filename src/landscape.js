import { Color } from './color.js'
import { Star } from './star.js'
import { Mountain } from './mountain.js'


let width = window.innerWidth;
let height = window.innerHeight;

var canvas = document.getElementById('landscape');
canvas.width = width;
canvas.height = height;

// var bug1, bug2, bug3, bug4, bug5, bug6;
// var star;

var mountainSeed = Math.random() * (.015 - .005) + 0.005;
var heightSeed = Math.random() * (height * .005 - 2.75) + 2.75;

// var heightSub = .7;
var heightSub = .25;

var pixelWidth = 1;

var starCount = 0;
var starSeed = Math.random() * 500;

var moon;
var moonyPos;
var moonRadius;
var moonOffset;
var moonXPos;

var Y_AXIS = 1;
var skyColor1, skyColor2;
var randomBlue = Math.floor(Math.random() * 150);

var r = Math.floor((Math.random() * 200));
var g = Math.floor((Math.random() * 200));
var b = Math.floor((Math.random() * 220));
var w1;
var w2;

var body = document.getElementsByTagName('body')[0];
var labels = document.getElementsByTagName('label');
var button = document.getElementsByTagName('button')[0];
if ((r + g + b) <= 300) {
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = '#131313';
    }
    body.style.backgroundColor = '#efefef';
    button.style.color = '#131313';
    button.style.border = '1px solid #131313';
} else {
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = '#efefef';
    }
    body.style.backgroundColor = '#131313';
}

// Make color palette
for (let label of labels) {
    let color = rgbToHex(r, g, b);
    label.backgroundColor = color;
    label.innerHTML = color
}

setup(canvas);
draw(canvas);

function setup(canvas) {
    // canvas.parent('sketch-container');
    // noStroke();
    moonyPos = Math.random() * (height / 2 - height / 3) + height / 3;
    moonRadius = Math.random() * moonyPos / 4;
    moonOffset = Math.random() * moonRadius;
    moonXPos = (Math.random() * ((width - moonRadius) - (moonRadius)) + moonRadius);
    skyColor1 = new Color(r - 10, g - 10, b + 50);
    skyColor2 = new Color(r + 200, g + 200, b + 60, 50);

    // w1 = new Color(255, 255, 255, 0);
    // w2 = new Color(200 + r, 200 + g, randomBlue, 75);

    // // createCanvas(width, height);
    // // background(skyColor1);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = skyColor1.rgba();
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // setGradient(0, 0, width, height, skyColor1, skyColor2, Y_AXIS);
    // // noLoop();

    for (let i = 0; i < width; i++) {
        makeStars(Math.random() * 1000);
    }

    makeStars(Math.random() * (500));

    // Make moon
    ctx.save();
    // ctx.globalCompositeOperation = "destination-out";
    // fill(255, 255, 255, Math.random() * ((255 - 200) + 200));
    ctx.fillStyle = new Color(255, 255, 255, 1).rgba();
    // ellipse(moonXPos, moonyPos, moonRadius);
    ctx.beginPath();
    ctx.ellipse(moonXPos, moonyPos, moonRadius, moonRadius, 0, 0, 2 * Math.PI);
    ctx.fill();
    // fill(skyColor1);
    ctx.fillStyle = skyColor1.rgba();
    // ellipse(moonXPos + moonOffset, moonyPos, moonRadius);
    ctx.beginPath();
    ctx.ellipse(moonXPos + moonOffset, moonyPos, moonRadius, moonRadius, 0, 0, 2 * Math.PI);
    // ctx.save();
    // ctx.globalCompositeOperation = "destination-out";  // will "punch-out" background
    ctx.fill();
    // ctx.restore();
    // ctx.fill("evenodd");
    // ctx.restore();
}

function draw(canvas) {
    // var star = new Star();
    // var bug0 = new Mountain(0, 9, 0, 4, .008, pixelWidth * 2);
    // var bug00 = new Mountain(0, 15, 0, 10, .10, pixelWidth * 2);

    var bug1 = new Mountain(0, heightSeed, 0, 4, mountainSeed, pixelWidth);
    var bug2 = new Mountain(0, heightSeed - heightSub, 0, 4, mountainSeed / 1, pixelWidth);
    var bug3 = new Mountain(0, heightSeed - (heightSub * 1.5), 0, 4, mountainSeed / 2, pixelWidth);
    var bug4 = new Mountain(0, heightSeed - (heightSub * 2), 0, 4, mountainSeed / 3, pixelWidth);
    var bug5 = new Mountain(0, heightSeed - (heightSub * 2.5), 0, 4, mountainSeed / 4, pixelWidth);
    var bug6 = new Mountain(0, heightSeed - (heightSub * 3), 0, 4, mountainSeed / 8, pixelWidth);

    // noStroke();

    let ctx = canvas.getContext('2d');

    // noStroke();
    //////////////////////////////////////
    // fill(r + 50, g + 50, b + 50);
    ctx.fillStyle = new Color(r + 50, g + 50, b + 50).rgba();

    // beginShape();
    let shape = new Path2D();
    shape.moveTo(0, height);
    for (let j = 0; j < width; j++) {
        // vertex(bug6.make());
        let v = bug6.getVertex();
        shape.lineTo(v[0], v[1]);
    }
    // vertex(width, height);
    shape.lineTo(width, height);
    // endShape();
    shape.closePath();
    // ctx.fill(region, "evenodd");
    ctx.fill(shape);

    // setGradient(0, height - 600, width, 600, w1, w2, Y_AXIS);
    // noStroke();
    //////////////////////////////////////

    //////////////////////////////////////
    // fill(r + 40, g + 40, b + 40);
    ctx.fillStyle = new Color(r + 40, g + 40, b + 40).rgba();

    // beginShape();
    shape = new Path2D();
    // vertex(0, height);
    shape.moveTo(0, height);
    for (let j = 0; j < width; j++) {
        // vertex(bug5.make());
        let v = bug5.getVertex();
        shape.lineTo(v[0], v[1]);
    }
    // vertex(width, height);
    shape.lineTo(width, height);
    // endShape();
    shape.closePath();
    // ctx.fill(region, "evenodd");
    ctx.fill(shape);

    // setGradient(0, height - 500, width, 500, w1, w2, Y_AXIS);
    // noStroke();
    //////////////////////////////////////

    // Mountain set 4
    //////////////////////////////////////
    // fill(r + 20, g + 20, b + 20);
    ctx.fillStyle = new Color(r + 20, g + 20, b + 20).rgba();
    // beginShape();
    shape = new Path2D();
    // vertex(0, height);
    shape.moveTo(0, height);
    for (let j = 0; j < width; j++) {
        // vertex(bug4.make());
        let v = bug4.getVertex();
        shape.lineTo(v[0], v[1]);
    }
    // vertex(width, height);
    shape.lineTo(width, height);
    // endShape();
    shape.closePath();
    // ctx.fill(region, "evenodd");
    ctx.fill(shape);

    // setGradient(0, height - 400, width, 400, w1, w2, Y_AXIS);
    // noStroke();
    //////////////////////////////////////

    // Mountain set 3
    //////////////////////////////////////
    // fill(r, g, b);
    ctx.fillStyle = new Color(r, g, b).rgba();
    // beginShape();
    shape = new Path2D();
    // vertex(0, height);
    shape.moveTo(0, height);
    for (let j = 0; j < width; j++) {
        // vertex(bug3.make());
        let v = bug3.getVertex();
        shape.lineTo(v[0], v[1]);
    }
    // vertex(width, height);
    shape.lineTo(width, height);
    // endShape();
    shape.closePath();
    // ctx.fill(region, "evenodd");
    ctx.fill(shape);

    // setGradient(0, height - 300, width, 300, w1, w2, Y_AXIS);
    // noStroke();
    //////////////////////////////////////

    // Mountain set 2
    //////////////////////////////////////
    // fill(r - 20, g - 20, b - 20);
    ctx.fillStyle = new Color(r - 20, g - 20, b - 20).rgba();
    // beginShape();
    shape = new Path2D();
    // vertex(0, height);
    shape.moveTo(0, height);
    for (let j = 0; j < width; j++) {
        // vertex(bug2.make());
        let v = bug2.getVertex();
        shape.lineTo(v[0], v[1]);
    }
    // vertex(width, height);
    shape.lineTo(width, height);
    // endShape();
    shape.closePath();
    // ctx.fill(region, "evenodd");
    ctx.fill(shape);

    // setGradient(0, height - 200, width, 200, w1, w2, Y_AXIS);
    // noStroke();
    //////////////////////////////////////

    // Mountain set 1 
    //////////////////////////////////////
    // fill(r - 40, g - 40, b - 40);
    ctx.fillStyle = new Color(r - 40, g - 40, b - 40).rgba();
    // beginShape();
    shape = new Path2D();
    // vertex(0, height);
    shape.moveTo(0, height);
    for (let j = 0; j < width; j++) {
        // vertex(bug1.make());
        let v = bug1.getVertex();
        shape.lineTo(v[0], v[1]);
    }
    // vertex(width, height);
    shape.lineTo(width, height);
    // endShape();
    shape.closePath();
    // ctx.fill(region, "evenodd");
    ctx.fill(shape);

    // setGradient(0, height - 100, width, 100, w1, w2, Y_AXIS);
    // noStroke();
    //////////////////////////////////////
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function makeStars(numStars) {
    if (starCount < numStars) {
        var s = new Star(random(width), random(height));
        s.draw();
    }
    starCount++;
}

function setGradient(x, y, w, h, c1, c2, axis) {
    let canvas = document.getElementById('landscape');
    let ctx = canvas.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, c1.rgba());
    gradient.addColorStop(1, c2.rgba());

    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // noFill();
    // if (axis === Y_AXIS) {
    //     for (var i = y; i <= y + h; i++) {
    //         var inter = map(i, y, y + h, 0, 1);
    //         var c = lerpColor(c1, c2, inter);
    //         stroke(c);
    //         line(x, i, x + w, i);
    //     }
    // }
}


function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function copyStringToClipboard(e) {
    const rgb = e.target.style.backgroundColor;
    const splitRGB = rgb.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
    const [r, g, b] = splitRGB;
    const hex = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
    navigator.clipboard.writeText(hex);
    e.target.firstElementChild.innerHTML = 'Copied!';
}

function outFunc(e) {
    e.target.firstElementChild.innerHTML = 'Copy';
}
