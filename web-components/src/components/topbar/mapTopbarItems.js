export default function mapTopbarItems(items, topbarReference) {
  items.forEach((item) => {
    if (item.type === "link") {
      const linkElement = document.createElement("a");
      linkElement.href = item.link;
      linkElement.className = "topbar__link";
      if (item.iconLink) {
        linkElement.innerHTML = `<img class="topbar__icon" src="${item.iconLink}" alt="${item.defaultName} Icon">${item.defaultName}`;
      } else {
        linkElement.innerHTML = `${item.defaultName}`;
      }
      topbarReference.appendChild(linkElement);
    } else if (item.type === "container") {
      const dropdownNode = document.createElement("div");
      dropdownNode.className = "topbar__dropdown";
      if (item.iconLink) {
        dropdownNode.innerHTML = `<img class="dropdown__icon" src="${item.iconLink}" alt="${item.defaultName} Icon"> <span class="dropbtn">${item.defaultName}</span>
        <div class="topbar__dropdown-content"></div>`;
      } else {
        dropdownNode.innerHTML = `<span  class="topbar__dropdown-button">${item.defaultName}</span>
        <div class="topbar__dropdown-content"></div>`;
      }

      item.objects.forEach((subItem) => {
        const linkEl = document.createElement("a");
        linkEl.className = "topbar__dropdown-link";
        linkEl.href = subItem.link;
        //TODO: add a falback for this behaviour as it does not look good
        linkEl.innerHTML = `<img src="${subItem.iconLink}" alt="${subItem.defaultName} Icon">${subItem.defaultName}`;
        dropdownNode
          .querySelector(".topbar__dropdown-content")
          .appendChild(linkEl);
      });

      topbarReference.appendChild(dropdownNode);
    }
  });
}
