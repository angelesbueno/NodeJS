import mongoose, { mongo } from 'mongoose';

const host = 'mongodb://127.0.0.1:27017/films';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(
  host,
  { poolSize: 200 }
)

conn.on('error', err => {
  console.log('Error', err)
  return process.exit()
})

conn.addListener('connected', () => console.log('Conectado a Mongo'))

const filmSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, trim: true, required: true },
    poster: { type: String, trim: true, required: true }
  },
  {
    strict: false
  }
);

const Film = conn.model('Film', filmSchema);

const newDocument = new Film({
  _id: new mongoose.Types.ObjectId(),
  title: 'Star Wars: The Last Jedi',
  poster: 'https://lumiere-a.akamaihd.net/v1/images/sb_payoff_1-sht_v6_lg_tm_lg_1db3a551.jpeg?region=0%2C625%2C1688%2C957'
})

newDocument.save(err => {
  if (err) {
    throw err;
  }
  console.log('Almacenado');
})