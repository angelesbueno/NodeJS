import express from 'express';

const router = express.Router();

router.get('/:user', (req, res) => {
    res.render('user', {
        title: 'Curso NodeJs Angy',
        message: `Bienvenido usuario ${req.params.user}`
    });
});

router.get('/:user/bio', (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(
        `<h1>Aquí vendría la bio del usuario ${req.params.user}</h1>`
    );
    res.end();
});

export default router;