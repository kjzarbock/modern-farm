import { usePlants } from "./field.js";

//In this module, define and export a harvestPlants function.
export const harvestPlants = () => {
//The harvestPlants function must accept the plants array as input.
    let plants = usePlants();
//The function will return an array of seed objects.
    let seedObjects = [];
//Iterate the array of growing plants. On each plant, get the value of the output property.
    for (const plant of plants) {
//Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                seedObjects.push(plant);
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                seedObjects.push(plant);
            }
//Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
        }