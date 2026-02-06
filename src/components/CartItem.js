import { Component } from "../common/Component.js";

export class CartItem extends Component {
  render() {
    const { item, cartContext } = this.props;

    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
      <img class="cart-thumb" src="${item.product.image}" alt="${item.product.title}" />
      <div class="cart-info">
        <div class="cart-title">${item.product.title}</div>
        <div class="cart-meta">
          <span>$${item.product.price}</span>
          <span>Qty: ${item.quantity}</span>
        </div>
      </div>
      <button class="cart-remove" type="button">Remove</button>
    `;

    row.querySelector(".cart-remove").addEventListener("click", () => {
      cartContext.removeProduct(item.product.id);
    });

    return row;
  }
}