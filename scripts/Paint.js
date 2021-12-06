import { getPaints } from "./database.js";

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