import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement("header");
    header.className = "header";

    header.innerHTML = `
      <div class="nav-inner">
        <div class="logo">
          <span class="logo-mark">KA</span>
          <span class="logo-text">KARLITA ATELIER</span>
        </div>

        <nav class="nav-links">
          <a href="#" class="nav-link">NEW</a>
          <a href="#" class="nav-link">RUNWAY</a>
          <a href="#" class="nav-link">ACCESSORIES</a>
        </nav>

        <div class="nav-right">
          <button class="cart-pill" type="button">
            CART <span class="cart-count">0</span>
          </button>
        </div>
      </div>
    `;

    const countEl = header.querySelector(".cart-count");

    const updateCount = () => {
      const count = this.props.cartContext.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      countEl.textContent = count;
    };


    updateCount();

    
    this.props.cartContext.subscribe(updateCount);

    
    const cartBtn = header.querySelector(".cart-pill");
    cartBtn.addEventListener("click", () => {
      if (this.props.onCartClick) {
        this.props.onCartClick();
      }
    });

    return header;
  }
}