import { getOrders } from "./database.js";
import { getWheels } from "./database.js";
import { getPaints } from "./database.js";
import { getInteriors } from "./database.js";
import { getTechnologies } from "./database.js";

export const Orders = () => {
  const orders = getOrders();
  let html = "<ul>";

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("");
  html += "</ul>";

  return html;
};

const technologies = getTechnologies();
const wheels = getWheels();
const interiors = getInteriors();
const paints = getPaints();

const buildOrderListItem = (order) => {
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
  return `<li>
    Order #${order.id} 
    Color: ${foundPaint.color} 
    Interior: ${foundInterior.seat} 
    Technology Package: ${foundTechnology.package}
    Wheel: ${foundWheel.type}    
    Price: ${costString}
  </li>`;
};
