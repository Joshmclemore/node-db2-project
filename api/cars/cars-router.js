// DO YOUR MAGIC
const router = require('express').Router()
const Cars = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars)
    } catch (err) {
      next(err)
    }
})
  
router.get('/:id', checkCarId, (req, res, next) => {
    res.json(req.car)
})
  
router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const newCar = await Cars.create(req.body)
        res.status(201).json(newCar)
    } catch (err) {
        next(err)
    }
})
  
router.use((err, req, res, next) => { // eslint-disable-line
    // DO YOUR MAGIC
    res.status(err.status || 500).json({
      message: err.message
    })
})

module.exports = router;