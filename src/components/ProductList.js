import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.products = [];
  }

  async fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    this.products = await res.json();
    this.renderProducts();
  }

  renderProducts() {
    this.element.innerHTML = "";
    this.products.forEach((product) => {
      const item = new ProductItem({
        product,
        cartContext: this.props.cartContext,
      });
      item.mount(this.element);
    });
  }

  render() {
    const div = document.createElement("div");
    div.className = "products";
    div.textContent = "Loading products...";
    this.element = div;
    this.fetchProducts();
    return div;
  }
}