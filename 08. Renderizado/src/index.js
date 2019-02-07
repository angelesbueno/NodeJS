import express from 'express';
import path from 'path';
import logger from 'morgan'; //logger
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.disable('x-powered-by');

app.set('env', 'development');

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// carga de ficheros estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Rutas, están definidas en routes
router(app);



// manejo de error 404
app.use((req, res, next) => {
    res.render('404', {
        title: 'Curso NodeJs Angy',
        message: 'La ruta a la que está intentando acceder no existe'
    })

})

// el orden de las rutas parametrizadas es muy importante
// express empezará desde arriba y comprobará los parámetros


app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost/9000');
});
