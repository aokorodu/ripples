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
    this.startColor = '#fa903e';
    this.strokeWidth = 3;

    // amplitude stuff
    this.maxAmplitude = 100;
    this.amplitute = 0;
    this.ampAngle = 0;
    this.ampAngleSpeed = .15;
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
      const w = i * this.gap;
      const h = w;
      const elps = document.createElementNS(this.ns, "ellipse");
      const color = this.lerpColor(this.startColor, this.endColor, i * 1.5 / this.num);
      elps.setAttribute("cx", this.center.x);
      elps.setAttribute("cy", this.center.y);
      elps.setAttribute("rx", w);
      elps.setAttribute("ry", h);
      elps.setAttribute("stroke", color);
      elps.setAttribute("stroke-width", this.strokeWidth + (i / this.num * 2));
      elps.setAttribute("fill", "transparent");
      this.circles.push(elps);
      this.svg.appendChild(elps);
      this.amps[i] = 0;
      this.gap *= 1.01;
    }
  }

  tiltCircles(percentage) {
    this.gap = this.h/2 / (this.num - 1);
    for (let i = 0; i < this.num; i++) {
      const w = i * this.gap;
      const h = w * percentage;
      this.circles[i].setAttribute("ry", h);
      this.gap *= 1.01;
    }
  }

  drip(x = this.center.x, y = this.center.y) {
    this.center.x = x;
    this.center.y = y
    this.amplitute = this.maxAmplitude;
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
      this.circles[i].setAttribute("cy", this.center.y + this.amps[i]);
    }
    this.ampAngle += this.ampAngleSpeed;
    this.amplitute *= .995;
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