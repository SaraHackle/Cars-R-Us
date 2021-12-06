import { getWheels } from "./database.js";

const wheels = getWheels();

export const Wheels = () => {
  let html = `<h2>Wheels</h2>
    <select name="wheels">
    <option value="0">Please select a wheel option</option>`;

  for (const wheel of wheels) {
    html += `
            <option value="${wheel.id}">${wheel.type}</option>`;
  }

  html += "</select>";
  return html;
};
