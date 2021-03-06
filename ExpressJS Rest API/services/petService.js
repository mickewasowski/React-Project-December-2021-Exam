const Pet = require('../models/Pet');
const userService = require('./userService');


exports.create = async function(petName, breed, age, type, publicImageId, userId){ //ownerId
   let typeUpperCase = type.toUpperCase();

   const pet = new Pet({
      petName,
      breed, 
      age, 
      type: typeUpperCase,
      publicImageId, 
      owner: userId
   });

   await pet.save();

   let user = await userService.getById(userId);
   user.myPets.push(pet._id);
   await user.save();

   return pet;
}

exports.getAnimalEnumTypes = async function(){

   let enumValues = Pet.schema.path('type').enumValues;
   const enumToObject = Object.assign(enumValues);

   return enumToObject;
}

exports.getAll = async function (){
   return await Pet.find();
}

exports.getOne = async function(petId){
   return await Pet.findOne({_id: petId});
}

exports.deleteOne = async function(petId){
   return await Pet.findByIdAndDelete(petId);
}

exports.editOne = async function(petId, petData){
   return await Pet.findByIdAndUpdate(petId, petData, {runValidators: true});
}

exports.getTopThree = async function(){
   return await Pet.find().sort({_id : -1}).limit(3);
}