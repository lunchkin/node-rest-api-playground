const express = require('express');
const router = express.Router();

router.get('/two', (req, res) => {
    res.status(200).json({
        'success': 1,
        'message': 'Hello World Two in routes/testingOne.js'
    });
});

router.get('/', (req, res) => {
    res.status(200).send({
        success: 1,
        message: 'Hello World in routes/testingOne.js'
    });
});

router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
        res.status(418).send({
            success: 0,
            message: 'Missing parameters'
        });
    }
});

module.exports = router;