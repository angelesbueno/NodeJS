// capturamos el error de tipo unhandleRejection
process.on('unhandleRejection', (err, p) => {
  console.log(`Custom unhandleRejection ${err}`);
})

// capturamos el error de tipo uncaughtException
process.on('uncaughtException', (err, p) => {
  console.log(`Custom uncaughtException ${err} \n`);
})


// error de tipo uncaughtException
// la función prueba no está definida en ningún sitio
prueba();


