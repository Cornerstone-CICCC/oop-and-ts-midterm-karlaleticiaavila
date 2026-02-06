import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  render() {
    const div = document.createElement("div");
    div.className = "product";

    const p = this.props.product;

    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p class="price">$${p.price}</p>
      <button class="add-btn" type="button">Add to cart</button>
    `;

    const btn = div.querySelector(".add-btn");
  
      btn.addEventListener("click", () => {
        this.props.cartContext.addProduct(p);
      });

    return div;
  }
}