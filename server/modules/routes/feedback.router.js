const express = require('express');
const router = express.Router();

const pool = require('../pool');


//GET call to the DB
router.get('/', (req, res) => {
    console.log('in the get call from the router');
    const queryText = "SELECT * FROM feedback"
    pool.query(queryText)
        .then((result) => {
            console.log('back from the GET CALL');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR handling GET CALL to DB', error);
            res.sendStatus(500);
        })
})

module.exports = router;