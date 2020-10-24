import { Ripples } from './ripples';
let randomColor = require('randomcolor');

export class App {
  constructor(w, h){
    this.w = w;
    this.h = h;
    this.tiltSlider = document.getElementById('tilt-slider');
    this.zoomSlider = document.getElementById('zoom-slider');
    this.speedSlider = document.getElementById('speed-slider');
    this.svg = document.getElementById("ripple-holder");
    this.ripple = new Ripples(w, h, this.svg, 150);
    this.maxResolution = 4000;
    this.res = this.defaultRes/2;
    this.swatchComponents = document.getElementsByTagName('swatch-component');
    
  }

  init(){
    console.log('app here!')
    this.initRipple();
    this.initSVGClick();
    this.initSliders();
    this.initSwatches();
    
  }

  initSwatches(){
    for(const swatch of this.swatchComponents){
      swatch.setAttribute("color", randomColor())
      swatch.addEventListener("click", (e)=>{
        console.log(swatch.getType());
        this.ripple.colorCircles(swatch.getColor(), swatch.getType());
      })
    }
  }

  initRipple(){
    this.ripple.init();
  }

  initSVGClick(){
    this.svg.addEventListener("click", (e)=>{
      let pt = this.svg.createSVGPoint();
  
      pt.x = e.clientX;
      pt.y = e.clientY;
      const svgP = pt.matrixTransform(this.svg.getScreenCTM().inverse());
      // this.ripple.drip(svgP.x, svgP.y);
      this.ripple.drip(svgP.y);
    })
  }

  initSliders(){
    this.tiltSlider.addEventListener("input", ()=>{
      const percentage = (100 - this.tiltSlider.value)/100;
      this.ripple.tiltCircles(Number(percentage));
    })

    this.zoomSlider.addEventListener("input", ()=>{
      const percentage = (100 - this.zoomSlider.value)/100;
      this.res = this.maxResolution * percentage;
      const vbString = `-${this.res/2} -${this.res/2} ${this.res} ${this.res}`
      this.svg.setAttribute("viewBox", vbString);
    })

    this.speedSlider.addEventListener("input", ()=>{
      const percentage = this.speedSlider.value/100;
      this.ripple.changeSpeed(percentage);
    })
  }
}