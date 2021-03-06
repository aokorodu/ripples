var colorLerp = require('color-lerp');
import { PVector } from './pvector';

export class Ripples {
  constructor(w, h, svg, num = 10) {
    console.log('Ripple here!')
    this.w = w;
    this.h = h;
    this.center = new PVector(0, 0);
    this.num = num;
    this.gap = h/2 / (num - 1);

    // stroke stuff
    this.endColor = '#b043f5';
    this.endColor_hsl = 'hsl(277, 90%, 61%)'
    this.startColor = '#fa903e';
    this.startColor_hsl = 'hsl(26, 95%, 61%)'
    this.strokeWidth = 5;

    // amplitude stuff
    this.maxAmplitude = 300;
    this.amplitute = 0;
    this.ampAngle = 0;
    this.ampAngleSpeed = (5*Math.PI)/this.num;
    this.amps = [];

    // svg stuff
    this.svg = svg;
    this.circles = [];
    this.ns = "http://www.w3.org/2000/svg";

    //
    this.active = false;
  }

  init() {
    this.buildCircles();
  }

  buildCircles() {
    for (let i = 0; i < this.num; i++) {
      const w = Math.round(i * this.gap);
      const h = w;
      const elps = document.createElementNS(this.ns, "ellipse");
      const color = this.lerpColor(this.startColor, this.endColor, i / this.num);
      elps.setAttribute("cx", this.center.x);
      elps.setAttribute("cy", this.center.y);
      elps.setAttribute("rx", w);
      elps.setAttribute("ry", h);
      elps.setAttribute("stroke", color);
      elps.setAttribute("stroke-width", this.strokeWidth);
      elps.setAttribute("fill", "transparent");
      this.circles.push(elps);
      this.svg.appendChild(elps);
      this.amps[i] = 0;
      this.gap *= 1.01;
    }
  }

  changeSpeed(percentage){
    this.ampAngleSpeed = (percentage * 10*Math.PI)/this.num;
  }

  // color-lerp: https://www.npmjs.com/package/color-lerp/v/1.0.2
  colorCircles(color, type) {
    type == "start" ? this.startColor_hsl = color : this.endColor_hsl = color;
    // "build" colors
    const new_hsl_colors = colorLerp(this.startColor_hsl, this.endColor_hsl, this.num, 'hex');
    // assign colors to circles
    for (let i = 0; i < this.num; i++) {
      const color = new_hsl_colors[i];
      this.circles[i].setAttribute("stroke", color);
    }
  }

  tiltCircles(percentage) {
    this.gap = this.h/2 / (this.num - 1);
    for (let i = 0; i < this.num; i++) {
      const w = i * this.gap;
      const h = Math.round(w * percentage);
      this.circles[i].setAttribute("ry", h);
      this.gap *= 1.01;
    }
  }

  drip(dy) {
    console.log(dy)
    let newAmp = Math.abs(dy);
    if(newAmp > this.maxAmplitude) newAmp = this.maxAmplitude;
    //this.center.x = Math.round(x);
    //this.center.y = Math.round(y)
    this.amplitute = newAmp;
    this.ampAngle = 0;
    for (let i = 0; i < this.num; i++) {
      this.circles[i].setAttribute("cx", this.center.x);
      this.circles[i].setAttribute("cy", this.center.y);
    }
    if (!this.active) {
      this.active = true;
      this.update();
    }

  }

  update() {
    const dy = Math.sin(this.ampAngle) * this.amplitute;
    this.amps.unshift(dy);
    this.amps.pop();
    for (let i = 0; i < this.num; i++) {
      this.circles[i].setAttribute("cy", Math.round(this.center.y + this.amps[i]));
      //this.circles[i].setAttribute("opacity", Math.abs(this.amps[i])/this.maxAmplitude * .5 + .5);
    }
    this.ampAngle += this.ampAngleSpeed;
    this.amplitute *= .9975;
    if (this.amplitute < .1) {
      this.amplitute = 0;
      this.active = false;
    } else {
      window.requestAnimationFrame(() => {
        this.update();
      })
    }
  }

  // https://gist.github.com/rosszurowski/67f04465c424a9bc0dae
  lerpColor(a, b, amount) {
    if (amount > 1) amount = 1;
    let ah = parseInt(a.replace(/#/g, ''), 16),
      ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
      bh = parseInt(b.replace(/#/g, ''), 16),
      br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
      rr = ar + amount * (br - ar),
      rg = ag + amount * (bg - ag),
      rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
  }
}