const carsModel = require("./cars-model");
var vinValidator = require('vin-validator');
const db = require("../../data/db-config");

const checkCarId = async (req, res, next) => {
  // HOKUS POKUS
  try{
    const car = await carsModel.getById(req.params.id);
    if(!car){
        res.status(404).json({
          mesaj: `${req.params.id} kimliğine sahip araba bulunamadı`
        })
    }
    else{
        req.car=car
    }
    next();
}
catch(err){
    res.status(500).json({
      mesaj: "Bir sorun oluştu"
    })
  }
}

const checkCarPayload = (req, res, next) => {
  // HOKUS POKUS
  const arr = ["vin","make","model","mileage"];
  let exMessage;
  arr.forEach((a) => {
    if(req.body[a] == undefined){
      //coklu alan koymadım 
      exMessage=`${a} is missing` 
    }
  });
  if(exMessage){
    res.status(400).json({
      message:exMessage
    })
  }
  else{
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // HOKUS POKUS
  if(!(vinValidator.validate(req.body["vin"]))){
    res.status(400).json({
      message: `vin ${req.body["vin"]} is invalid`
    })
  }
  else{
    next();
  }
}

const checkVinNumberUnique = async(req, res, next) => {
  // HOKUS POKUS
  try{
    const possible = await db("cars")
      .where("vin", req.body.vin)
      .first();
    if(possible){
      res.status(400).json({
        message:`vin ${req.body.vin} already exists`
      })
    }
    else{
      next();
    }
  }
  catch(err){
    next(err)
  }
}

module.exports = {checkCarId,checkCarPayload,checkVinNumberValid,checkVinNumberUnique};