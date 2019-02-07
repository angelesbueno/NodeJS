import Sequelize from 'Sequelize';

const sequelize = new Sequelize('films', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

const Film = sequelize.define(
  'Film',
  
)