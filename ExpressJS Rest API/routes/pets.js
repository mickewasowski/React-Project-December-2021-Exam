const router = require('express').Router();
const petService = require('../services/petService');

const Pet = require('../models/Pet');

//get all
const getAllPets = async (req,res) => {
   try{
      const allPets = await petService.getAll();

      return res.status(302).json(allPets);
   }
   catch(error){
      return res.status(404).json({message: error.message});
   }
};

//get one
const getOne = async (req,res) => {
try {
   let petId = req.params.id;

   const pet = await petService.getOne(petId)

   if (pet == null) {
      return res.status(404).json({message: "Cannot find pet!"});
   }else{
      return res.json(pet);
   }
   
} catch (error) {
   return res.status(404).json({message: error.message});
}
};


//get animalTypes
const getAnimalTypes = async (req,res) => {

   let enumValues = Pet.schema.path('type').enumValues;
   const enumToObject = Object.assign(enumValues);

   return res.json(enumToObject);
};

//create one
const create = async (req,res) => {
   let {petName, breed, age, type, publicImageId, userId} = req.body; //imageURL

   try{
      const pet = await petService.create(petName, breed, age, type, publicImageId, userId); //imageURL

      return res.status(201).json(pet);
   }catch(error){
      return res.status(400).json({message: error.message});
   }
};

//update one
const updatePet = async (req,res) => {
   
   try {
      let {petName, breed, age, type} = req.body;

      const updated = await petService.editOne(req.params.id, {petName, breed, age, type});

      return res.status(201).json(updated);
      
   } catch (error) {
      return res.status(400).json({message: error.message});
   }
};

//delete one
const deletePet = async (req,res) => {
   
   try {
      await petService.deleteOne(req.params.id);

      return res.status(200).json({message: "Deleted successfully!"});
   } catch (error) {
      return res.status(400).json({message: error.message});
   }
};

router.get('/all', getAllPets);
router.get('/:id', getOne);
router.post('/create', create);
router.patch('/:id', updatePet);
router.delete('/:id', deletePet);

router.get('/db/types', getAnimalTypes); 
module.exports = router;