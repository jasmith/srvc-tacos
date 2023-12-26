const Taco = require('./tacoModel');  // Import the Taco model
const moongoose=require("mongoose");
console.log('Controller loaded');
console.log(`Controlleer ${Taco.find()}`);

//Stub
exports.stubCall = async (req, res) => {
console.log('Stub Called')
res.json({stub_data:"An array of all subpopulation objects - !include patients"})
};

// Get all tacos
exports.getAllTacos = async (req, res) => {
  try {
    const tacos = await Taco.find();  // Use Mongoose's find method to retrieve all tacos
    res.json(tacos);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving tacos:');
  }
};

// Get a single taco by ID
exports.getTacoById = async (req, res) => {
  try {
    const taco = await Taco.findById(req.params.id);  // Use Mongoose's findById method
    if (taco) {
      res.json(taco);
    } else {
      res.status(404).send('Taco not found');
    }
  } catch (error) {
    //res.send(500, 'Error retrieving ${error.message}');
    res.status(500).send('Error retrieving - bub');
    //res.status(500).send('Error retrieving taco:', error);
  }
};

// Add a new taco
exports.addTaco = async (req, res) => {
  try {
    const newTaco = new Taco(req.body);  // Create a new Taco instance with the request body
    const savedTaco = await newTaco.save();  // Save the new taco to the database
    res.status(201).json(savedTaco);
  } catch (error) {
    res.status(500).send('Error saving taco:', error);
  }
};

// Update a taco by ID
exports.updateTaco = async (req, res) => {
  try {
    const updatedTaco = await Taco.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Update the taco and return the new document
    if (updatedTaco) {
      res.json(updatedTaco);
    } else {
      res.status(404).send('Taco not found');
    }
  } catch (error) {
    res.status(500).send('Error updating taco:', error);
  }
};

// Delete a taco by ID
exports.deleteTaco = async (req, res) => {
  try {
    const deletedTaco = await Taco.findByIdAndDelete(req.params.id);  // Delete the taco
    if (deletedTaco) {
      res.send('Taco successfully deleted');
    } else {
      res.status(404).send('Taco not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting taco:', error);
  }
};
