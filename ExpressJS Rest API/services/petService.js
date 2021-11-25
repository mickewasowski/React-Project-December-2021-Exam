const Pet = require('../models/Pet');

exports.create = async function(petName, breed, age, type, imageURL){ //ownerId
   return await Pet.create({petName, breed, age, type, imageURL});
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