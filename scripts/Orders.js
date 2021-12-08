import { getOrders } from "./database.js";
import { getWheels } from "./database.js";
import { getPaints } from "./database.js";
import { getInteriors } from "./database.js";
import { getTechnologies } from "./database.js";

export const Orders = () => {
  const orders = getOrders();
  let html = "";
  if ( orders.length > 0 ) {
 
  const listItems  = orders.map((order) => {

      
      const technologies = getTechnologies();
      const wheels = getWheels();
      const interiors = getInteriors();
      const paints = getPaints();
      
      const foundTechnology = technologies.find((technology) => {
          return technology.id === order.technologyId;
        });
        const foundInterior = interiors.find((interior) => {
            return interior.id === order.interiorId;
        });
        const foundPaint = paints.find((paint) => {
            return paint.id === order.paintId;
        });
        const foundWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId;
    });
    const totalCost =
    foundTechnology.price +
    foundInterior.price +
    foundPaint.price +
    foundWheel.price;
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    return `<li class = "orderDisplay">
    Order #${order.id}</br>
    You chose: ${foundPaint.color} paint
    with  ${foundInterior.seat} seats and
    our premium ${foundTechnology.package} with
    ${foundWheel.type} wheels</br>
    Total Price: ${costString} 
    </li>`;
    
});

html += listItems.join("");
html += "</ul>";
  }
return html;
};