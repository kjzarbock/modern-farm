import { createPlan } from "./plan.js";
import { addPlant } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
console.log(yearlyPlan);
console.log(usePlants());

const test = harvestPlants(usePlants());
console.log(test);