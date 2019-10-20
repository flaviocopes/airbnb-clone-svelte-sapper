import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../database.js'

class House extends Model {}

House.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  hostName: { type: DataTypes.STRING, allowNull: false },
  picture: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  town: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  superhost: { type: DataTypes.BOOLEAN, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  guests: { type: DataTypes.INTEGER, allowNull: false },
  bedrooms: { type: DataTypes.INTEGER, allowNull: false },
  beds: { type: DataTypes.INTEGER, allowNull: false },
  baths: { type: DataTypes.INTEGER, allowNull: false },
  wifi: { type: DataTypes.BOOLEAN, allowNull: false },
  kitchen: { type: DataTypes.BOOLEAN, allowNull: false },
  heating: { type: DataTypes.BOOLEAN, allowNull: false },
  freeParking: { type: DataTypes.BOOLEAN, allowNull: false },
  entirePlace: { type: DataTypes.BOOLEAN, allowNull: false }
}, {
  sequelize,
  modelName: 'house',
  timestamps: false
})

export default House