const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if(!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    next(err)
  }
  
}

const checkCarPayload = (req, res, next) => {
  const error = {status: 400}
  const { vin, make, model, mileage } = req.body
  if(!vin) {
    error.message = "vin is missing"
  } else if (!make) {
    error.message = "make is missing"
  } else if (!model) {
    error.message = "model is missing"
  } else if (!mileage) {
    error.message = "mileage is missing"
  } if (error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique }