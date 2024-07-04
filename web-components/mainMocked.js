// This document has mocked data
import jsonData from "./src/components/topbar/tests/sampleData.json";
import "./src/components/topbar/topbar";
import "./src/common/global-colors.css";
import "./src/common/global-properties.css";
import "./src/common/global-reset.css";

document.addEventListener("DOMContentLoaded", () => {
  const topBar = document.querySelector("dynamic-topbar");
  if (topBar) {
    topBar.data = JSON.stringify(jsonData);
  }
});
