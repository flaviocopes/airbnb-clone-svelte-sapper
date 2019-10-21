import Booking from '../../models/booking.js'
import { Op } from 'sequelize'

export const post = async (req, res, next) => {
  const startDate = req.body.startDate
  const endDate = req.body.endDate
  const houseId = req.body.houseId

  const results = await Booking.findAll({
    where: {
      houseId: houseId,
      startDate: {
        [Op.lte]: new Date(endDate)
      },
      endDate: {
        [Op.gte]: new Date(startDate)
      }
    }
  })

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({
    status: 'success',
    message: (results.length > 0) ? 'busy' : 'free'
  }))
}