import readline from 'readline';
import async from './async';
import events from './events';

const file = process.argv[2];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(
  `¿Cómo quiere leer el fichero?
  1. De forma asíncrona
  2. Con eventos
  Seleccione una opción: `,
  value => {
    console.log(`Selección ${value}\n\n`);

    switch (value) {
      case '1':
        async(file);
      break;
      case '2':
        events(file);
      break;
      default:
        console.log('Esa opción no está contemplada');
      break;
    }
    rl.close();
  }
)
