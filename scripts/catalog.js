import { createPlan } from "./plan.js";
import { addPlant } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';


export const catalog = () => {
  const foods = harvestPlants(usePlants());
  let htmlString = '<main class="container">';
  for (const food of foods) {
    htmlString += `<section class="plant">${food.type}</section>`;
  }
  htmlString += '</main>';
  return htmlString;
};
