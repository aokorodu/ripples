import { Ripples } from './ripples';

export class App {
  constructor(w, h){
    this.w = w;
    this.h = h;
    this.slider = document.getElementById('tilt-slider');
    this.svg = document.getElementById("ripple-holder");
    this.ripple = new Ripples(w, h, this.svg, 150);
    
  }

  init(){
    console.log('app here!')
    this.initRipple();
    this.initSVGClick();
    this.initSlider();
    
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
      this.ripple.drip(svgP.x, svgP.y);
    })
  }

  initSlider(){
    this.slider.addEventListener("input", ()=>{
      const percentage = (100 - this.slider.value)/100;
      this.ripple.tiltCircles(Number(percentage));
    })
  }
}