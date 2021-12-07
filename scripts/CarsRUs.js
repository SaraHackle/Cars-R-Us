import { Wheels } from "./Wheel.js";
import { Interiors } from "./Interior.js";
import { Paints } from "./Paint.js";
import { Technologies } from "./Technology.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    addCustomOrder();
  }
});

export const CarsRUs = () => {
  return `
        <h1>Cars-R-Us</h1>
        <article class="choices">
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__ wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}         
            </section>
            <section class="choices__paints options">
                ${Paints()}         
            </section>
        </article>
        <article class= "button">
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Car Orders : </h2>
            ${Orders()}
        </article>
    `;
};
