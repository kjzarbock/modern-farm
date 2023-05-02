let fieldPlants = [];

export const addPlant = (seed) => {
  fieldPlants.push(seed);
};

export const usePlants = () => {
  const plantCopy = [...fieldPlants];
  const isCorn = plantCopy.some((plant) => Array.isArray(plant));
  if (isCorn) {
    return plantCopy.flat();
  }
  return plantCopy;
};

/*const plants = [];
export const addPlant = (seed) => {
  plants.push(seed);
};

export const usePlants = () => {
  return [...plants]; 
};*/

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