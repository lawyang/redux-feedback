const express = require('express');
const router = express.Router();

const pool = require('../pool');


//GET call to the DB
router.get('/', (req, res) => {
    console.log('in the get call from the router');
    const queryText = "SELECT * FROM feedback"
    pool.query(queryText)
        .then((result) => {
            console.log('back from the GET CALL', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR handling GET CALL to DB', error);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    console.log('in the POST route');
    console.log('req body', req.body);
    let body = req.body;
    console.log('this is body',body);
    const queryText = "INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);";
    pool.query(queryText, [body.feeling, body.understanding, body.support, body.comment])
        .then((result) => {
            console.log('success POST', result);
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('FAILED POST', error);
            res.sendStatus(500)
        })
})

router.delete('/:id', (req, res) => {
    console.log('in delete router');
    const id = req.params.id;
    const queryText = "DELETE FROM feedback WHERE id=$1";
    pool.query(queryText, [id])
        .then((result) => {
            console.log(`successful delete`, result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error deleting feedback`, error);
            res.sendStatus(500);
        })
})

module.exports = router;