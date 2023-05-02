//Define and export a plantSeeds function.
//Function must accept the year's planting plan (must define a parameter)
//The plan is an array.  It contains 4 arrays representing the rows in the field to be plants. 
//Figure out how to iterate both the parent array and the child arrays
import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

let rows = createPlan();

export const plantSeeds = (rows) => {
  for (const row of rows) {
    for (const plant of row) {
      let seed;

      switch (plant) {
        case 'Asparagus':
          seed = createAsparagus();
          break;
        case 'Corn':
          seed = createCorn();
          break;
        case 'Potato':
          seed = createPotato();
          break;
        case 'Soybean':
          seed = createSoybean();
          break;
        case 'Wheat':
          seed = createWheat();
          break;
        case 'Sunflower':
          seed = createSunflower();
          break;
        default:
          console.log(`Unknown plant type: ${plant}`);
          break;
      }

      if (seed) {
        addPlant(seed);
      }
    }
  }
};
