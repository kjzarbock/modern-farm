import { harvestPlants } from "./harvester.js";

export const Catalog = (harvestPlants) => {
    const mainElement = document.querySelector('main');
    harvestedFood.forEach((food) => {
      const foodItem = `<section class="plant">${food.name}</section>`;
      mainElement.innerHTML += foodItem;
    });
  };
  