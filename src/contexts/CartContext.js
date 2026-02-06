export class CartContext {
  constructor() {
    this.items = [];
    this.listeners = [];
  }

  subscribe(fn) {
    this.listeners.push(fn);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.items));
  }

  addProduct(product) {
    const index = this.items.findIndex((item) => item.product.id === product.id);

    if (index !== -1) {
      this.items[index].quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }

    this.notify();
  }

  removeProduct(id) {
    this.items = this.items.filter((item) => item.product.id !== id);
    this.notify();
  }
}