class Counter extends HTMLElement {
  private x = 0;

  clicked() {
    this.x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.textContent = this.x.toString();
  }
}
export default Counter;
window.customElements.define("num-counter", Counter);
