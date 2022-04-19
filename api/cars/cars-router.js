// DO YOUR MAGIC
const router = require('express').Router()
const Cars = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, chevali } = require('./cars-middleware')

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
  
router.post('/', checkCarPayload, (req, res, next) => {
    try {
        res.json('post new car route')
    } catch (err) {
        next(err)
    }
})
  
router.put('/:id', (req, res, next) => {
    // const updated = await Account.updateById(req.params.id, req.body)
    try {
      res.json('put route')
    } catch (err) {
      next(err)
    }
  });
  
router.delete('/:id', (req, res, next) => {
    try {
    //   await Account.deleteById(req.params.id)
      res.json('delete route')
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