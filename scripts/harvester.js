
// Define a function to harvest plants
export const harvestPlants = (plants) => {
    // Create an empty array to store the harvested plants
    let harvestedPlants = [];
  
    // Iterate the array of plants
    for (const plant of plants) {
      // Get the output of the plant
      let output = plant.output;
  
      // If the plant is corn, only half of the output will be harvested
      if (plant.type === "corn") {
        output /= 2;
      }
  
      // Add the plant to the array of harvested plants
      for (let i = 0; i < output; i++) {
        harvestedPlants.push(plant);
      }
    }
  
    // Return the array of harvested plants
    return harvestedPlants;
  };
  

  