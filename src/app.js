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
    this.res = this.defaultRes/2;
    this.swatchComponents = document.getElementsByTagName('swatch-component');
    this.vb_w, this.vb_h, this.vb_ratio, this.vb_w_MAX;
    
  }

  init(){
    console.log('app here!');
    this.initViewBoxProps();
    this.initRipple();
    this.initSVGClick();
    this.initSliders();
    this.initSwatches();
    
  }
  
  initViewBoxProps(){
    const vbString = this.svg.getAttribute("viewBox");
    const vbArray = vbString.split(" ");
    this.vb_w = Number(vbArray[2]);
    this.vb_h = Number(vbArray[3]);
    this.vb_ratio = this.vb_h/this.vb_w;
    this.vb_w_MAX = this.vb_w*2;
    console.log(this.vb_w, this.vb_h);
  }

  initSwatches(){
    for(const swatch of this.swatchComponents){
      const c = randomColor({format: 'hsl' });
      console.log(c);
      swatch.setAttribute("color", c)
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
      const percentage = this.zoomSlider.value/100;
      console.log('%: ', percentage)
      const new_vb_w = percentage * (this.vb_w_MAX)/2 + (this.vb_w_MAX)/2;
      const new_vb_h = new_vb_w * this.vb_ratio;
      console.log('new_vb_w: ', new_vb_w);
      //this.res = this.vb_w_MAX * percentage;
      const vbString = `-${new_vb_w/2} -${new_vb_h/2} ${new_vb_w} ${new_vb_h}`
      this.svg.setAttribute("viewBox", vbString);
    })

    this.speedSlider.addEventListener("input", ()=>{
      const percentage = this.speedSlider.value/100;
      this.ripple.changeSpeed(percentage);
    })
  }
}