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
  {
    id: {
      type: Sequelize.INTEGER,
      autoincrement: true,
      field: 'id',
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    poster: {
      type: Sequelize.STRING,
      field: 'poster'
    }
  },
  {
    freezeTableName: true
  }
)

Film.sync({ force: true })
  .then(() => Film.create ({
    title: 'Star Wars: The Last Jedi',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/sb_payoff_1-sht_v6_lg_tm_lg_1db3a551.jpeg?region=0%2C625%2C1688%2C957'
  }))