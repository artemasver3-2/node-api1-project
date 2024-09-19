// BUILD YOUR SERVER HERE

const express = require('express');

const server = express()


server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Content Not Found'
    });
});


module.exports = server;
