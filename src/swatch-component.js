const template = document.createElement('template');
template.innerHTML = `
<style>
  .swatch {
    width: 25px;
    height: 25px;
    border-radius: 4px;
    border: 1px solid black;
    background-color: #ffffff;
  }
</style>
<div class="swatch">
</div>
`

class SwatchComponent extends HTMLElement{
  constructor(){
    console.log('swatch watch!')
    super();
    this.color = this.getAttribute("color");
    this.type = this.getAttribute("type");
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const swatch = this.shadowRoot.querySelector(".swatch");
    swatch.style.backgroundColor = this.color;
  }

  getColor(){
    return this.color;
  }

  getType(){
    return this.type;
  }
}

window.customElements.define('swatch-component', SwatchComponent);