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

class SwatchComponent extends HTMLElement {
  static get observedAttributes() {
    return ['color'];
  }
  constructor() {
    super();
    this.color = this.getAttribute("color");
    this.type = this.getAttribute("type");
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.swatch = this.shadowRoot.querySelector(".swatch");
    this.swatch.style.backgroundColor = this.color;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateColor(newValue)
  }

  updateColor(newColor) {
    this.color = newColor;
    this.swatch.style.backgroundColor = this.color;
  }

  getColor() {
    return this.color;
  }

  getType() {
    return this.type;
  }
}

window.customElements.define('swatch-component', SwatchComponent);