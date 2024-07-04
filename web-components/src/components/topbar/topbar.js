import styles from "./topbar.css?inline";
import mapTopbarItems from "./mapTopbarItems";
import validateTopbarItems from "./validateTopbarItems";

class DynamicTopbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="topbar"></div>
    `;
  }

  set data(value) {
    try {
      const jsonData = JSON.parse(value);

      if (!validateTopbarItems(jsonData)) {
        throw new Error("Invalid format for top bar data input");
      }

      this.render(jsonData);
    } catch (error) {
      console.error("Error setting data in DynamicTopbar:", error);
    }
  }

  render(data) {
    const topbarReference = this.shadowRoot.querySelector(".topbar");
    const topbarItems = data.content;

    try {
      mapTopbarItems(topbarItems, topbarReference);
    } catch (error) {
      console.error("Error rendering top bar items:", error);
      topbarReference.innerHTML = `<p>Error displaying top bar items.</p>`;
    }
  }
}

customElements.define("dynamic-topbar", DynamicTopbar);