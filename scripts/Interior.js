import { getInteriors, setInterior } from "./database.js";

document.addEventListener("change", (event) => {
  if (event.target.name === "interior") {
    setInterior(parseInt(event.target.value));
  }
});

const interiors = getInteriors();

export const Interiors = () => {
  let html = `<h2>Interiors</h2>
    <select name="interior">
    <option value="0">Please select an interior</option>`;

  for (const interior of interiors) {
    html += `
            <option value="${interior.id}">${interior.seat}</option>`;
  }

  html += "</select>";
  return html;
};
