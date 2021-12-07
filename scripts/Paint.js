import { getPaints, setPaint } from "./database.js";

document.addEventListener("change", (event) => {
  if (event.target.name === "paint") {
    setPaint(parseInt(event.target.value));
  }
});

const paints = getPaints();

export const Paints = () => {
  let html = `<h2>Paints</h2>
    <select name="paint">
    <option value="0">Please select a paint option </option>`;

  for (const paint of paints) {
    html += `
            <option value="${paint.id}">${paint.color}</option>`;
  }

  html += "</select>";
  return html;
};
