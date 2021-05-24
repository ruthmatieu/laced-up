const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = 8000;

app.use(cors());
app.use(express.json());

//list all shoes
app.get('/shoes', async (req, res) => {
    try {
        const allShoes = await pool.query(
            "SELECT * FROM products"
        );
        res.json(allShoes.rows);
    } catch(err){
        console.log(err.message);
    }
});

//get a specific shoe
app.get('/shoes/:id', async (req, res) => {
    try {

    } catch {

    }
});

//delete a shoe
app.delete('/shoes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const removeShoe = await pool.query(
            "DELETE FROM products WHERE id = $1",
            [id]
        );
        res.json(`${id} deleted.`)
    } catch(err){
        console.log(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

