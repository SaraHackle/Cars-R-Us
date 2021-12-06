const database = {
  paints: [
    { id: 1, color: "Silver", price: 500 },
    { id: 2, color: "Midnight Blue", price: 710 },
    { id: 3, color: "Firebrick Red", price: 965 },
    { id: 3, color: "Spring Green", price: 965 },
  ],
  wheels: [
    { id: 1, type: "17-inch Pair Radial", price: 405 },
    { id: 2, type: "17-inch Pair Radial Black", price: 782 },
    { id: 3, type: "18-inch Pair Spoke Silver", price: 1470 },
    { id: 4, type: "18-inch Pair Spoke Black", price: 1997 },
  ],
  interiors: [
    { id: 1, seat: "Beige Fabric", price: 12.42 },
    { id: 2, seat: "Charcoal Fabric", price: 736.4 },
    { id: 3, seat: "White Leather", price: 1258.9 },
    { id: 4, seat: "Black Leather", price: 795.45 },
  ],
  technologies: [
    { id: 1, package: "Basic Package", price: 12.42 },
    { id: 2, package: "Navigation Package", price: 736.4 },
    { id: 3, package: "Visibility Package", price: 1258.9 },
    { id: 4, package: "Ultra Package", price: 795.45 },
  ],
};

export const getPaints = () => {
  return database.paints.map((paint) => ({ ...paint }));
};
export const getWheels = () => {
  return database.wheels.map((wheel) => ({ ...wheel }));
};
export const getInteriors = () => {
  return database.interiors.map((interior) => ({ ...interior }));
};
export const getTechnologies = () => {
  return database.technologies.map((technology) => ({ ...technology }));
};
