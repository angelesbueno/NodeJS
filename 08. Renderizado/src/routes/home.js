import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Curso NodeJS Angy',
        message: 'Curso de NodeJS - Home'
    })
    res.end();
});

export default router;