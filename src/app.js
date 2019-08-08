'use strict'

const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API",
        version: "0.0.4"
    });
});

const create = route.post('/', (req, res, next) => {
    res.status(201).send(req.body)
})

const put = route.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({"id": id, "item": req.body});
})

app.use('/', route);
app.use('/produto', create);
app.use('/produto', put);

module.exports = app;