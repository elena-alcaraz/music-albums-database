const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

require('dotenv').config();

//create and config my server
const server = express();
server.use(cors());
server.use(express.json());

//init express aplication
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//DB connection
async function getConnection () {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    await connection.connect();
    return connection;
};

//Insert a record into its main entity
server.post('/musicDb', async (req, res) => {
    try{
        const connection = await getConnection();
        const { title, author, year } = req.body;
        const insert = 'INSERT INTO albums (title, year, author) VALUES (?, ?, ?)';
        const [newAlbum] = await connection.query(insert, [title, year, author]);

        res.status(201).json({
            message: 'Album created',
            result: {
                id: newAlbum.insertId,
                title: title,
                author: author,
                year: year,
            },
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
})

//Read/List all existing records
server.get('/musicDb', async (req, res) => {
    try{
        const connection = await getConnection();
        const selectAll = 'SELECT * FROM albums';
        const [result] = await connection.query(selectAll);

        res.status(200).json({
            info: { count: result.length },
            result: result,
        });
        await connection.end();
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

//Read records filtered by the field of your interest
server.get('/musicDb/:author', async (req, res) => {
    try{
        const connection = await getConnection();
        const { author } = req.params;
        const selectAuthor= 'SELECT * FROM albums WHERE author = ?';
        const [result] = await connection.query(selectAuthor, [author]);

        if (result.length === 0) {
            res.status(400).json ({ message: 'The artist does not exist in the data base' })
        } else {
            res.status(200).json({
                info: { count: result.length },
                result: result,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

//Update an existing record
server.put('/musicDb/:id', async (req, res) => {
    try{
        const connection = await getConnection();
        const idAlbum = req.params;
        const newData = req.body;
        const updateSql = 'UPDATE albums SET title= ?, year= ?, author= ? WHERE id = ?';
        const [result] = await connection.query(updateSql, [newData.title, newData.year, newData.author, idAlbum.id]);

        if (result.affectedRows === 0) {
            res.status(400).json ({ message: 'The album does not exist in the data base' })
        } else {
            res.status(200).json({
                message: 'Album updated',
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

//Delete an existing record
server.delete('/musicDb/:id', async (req, res) => {
    try{
        const connection = await getConnection();
        const idAlbum = req.params.id;
        const deleteSql = 'DELETE FROM albums WHERE id = ?';
        const [result] = await connection.query(deleteSql, [idAlbum]);

        if (result.affectedRows === 0) {
            res.status(400).json ({ message: 'The album does not exist in the data base' })
        } else {
            res.status(200).json({
                message: 'Album deleted',
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

