import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { CartList } from "./CartList.js";

export class App extends Component {
  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "app-container";

    const cartList = new CartList({ cartContext: this.props.cartContext });

    const header = new Header({
      cartContext: this.props.cartContext,
      onCartClick: () => cartList.toggle(),
    });
    header.mount(wrapper);

    const productList = new ProductList({ cartContext: this.props.cartContext });
    productList.mount(wrapper);

    cartList.mount(wrapper);

    const footer = new Footer();
    footer.mount(wrapper);

    return wrapper;
  }
}