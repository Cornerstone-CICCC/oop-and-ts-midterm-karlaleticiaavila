import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.textContent = "Midterm Project — Karlita • FW26 Collection";
    return footer;
  }
}