import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    this.element?.classList.add("open");
    this.renderItems();
  }

  close() {
    this.isOpen = false;
    this.element?.classList.remove("open");
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  renderItems() {
    const cartContext = this.props.cartContext;

    const body = this.element.querySelector(".cart-body");
    const totalEl = this.element.querySelector(".cart-total");

    body.innerHTML = "";

    if (cartContext.items.length === 0) {
      body.innerHTML = `<div class="cart-empty">Your cart is empty</div>`;
      totalEl.textContent = "$0.00";
      return;
    }

    cartContext.items.forEach((item) => {
      const ci = new CartItem({ item, cartContext });
      ci.mount(body);
    });

    const total = cartContext.items.reduce(
      (sum, it) => sum + it.product.price * it.quantity,
      0
    );

    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  render() {
    const panel = document.createElement("aside");
    panel.className = "cart-panel";

    panel.innerHTML = `
      <div class="cart-head">
        <div class="cart-head-title">Cart</div>
        <button class="cart-close" type="button">✕</button>
      </div>

      <div class="cart-body"></div>

      <div class="cart-foot">
        <div>Total</div>
        <div class="cart-total">$0.00</div>
      </div>
    `;

    panel.querySelector(".cart-close").addEventListener("click", () => this.close());

    this.props.cartContext.subscribe(() => {
      if (this.isOpen) this.renderItems();
    });

    this.element = panel;

   
    this.close();
    return panel;
  }
}