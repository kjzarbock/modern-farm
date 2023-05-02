// Define an empty array to store the plants
const plants = [];

// Define and export the addPlant function
export const addPlant = (seed) => {
  plants.push(seed);
};

// Define and export the usePlants function
export const usePlants = () => {
  return [...plants]; // Return a copy of the array of plants using the spread syntax
};

/*//Define and export a function called addPlant that will receive a seed object as input.
export const addPlant = (seed) => {
    let fieldPlants = [];

    //add the seed object to the fieldPlants array.
    fieldPlants.push(seed);
};

// Define and export the usePlants function
export const usePlants = () => {
  // Return a copy of the 'fieldPlants' array using the spread operator
  return [...fieldPlants];
};
*/