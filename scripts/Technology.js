import { getTechnologies, setTechnology } from "./database.js";

document.addEventListener("change", (event) => {
  if (event.target.name === "technology") {
    setTechnology(parseInt(event.target.value));
  }
});

const technologies = getTechnologies();

export const Technologies = () => {
  let html = `<h2>Technologies</h2>
    <select name="technology">
    <option value="0">Please select a technology package </option>`;

  for (const technology of technologies) {
    html += `
            <option value="${technology.id}">${technology.package}</option>`;
  }

  html += "</select>";
  return html;
};
