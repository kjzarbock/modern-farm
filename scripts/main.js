import { createPlan } from "./plan.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { usePlants } from "./field.js";
import { addPlant } from "./field.js";
import { plantSeeds } from "./tractor.js";

plantSeeds(createPlan());
const plants = usePlants();
console.log(plants);

/* const corn = createCorn()
const potato = createPotato()
const yearlyPlan = createPlan()
const bean = createSoybean()
const sunflower = createSunflower()
const asparagus = createAsparagus()
const wheat = createWheat()
const */

/*const testObject = {
    type: "beans",
    height: 32,
    output: 2
}

addPlant(testObject)
const test = usePlants()
console.log(test)*/
