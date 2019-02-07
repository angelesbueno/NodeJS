import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res
        .status(200)
        .send(
          'Bienvenido/a a mi primera API REST'
        )
})

export default router;