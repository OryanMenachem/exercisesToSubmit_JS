import express from 'express'
import connection from './app.js';

const router = express.Router();



router.get('/1', async (req, res) => {

    const [rows] = await connection.execute('SELECT COUNT(*) as totalOrders FROM orders');

    res.send(JSON.stringify(rows[0], null, 2));
    
})

router.get('/2', async (req, res) => {

    const [rows] = await connection.execute('SELECT COUNT(*) FROM `customers` WHERE `country` = "USA";');

    res.send(JSON.stringify(rows[0], null, 2));
    
})

router.get('/3', async (req, res) => {

    const [rows] = await connection.execute('SELECT `amount` FROM `payments` ORDER BY `amount` DESC LIMIT 1;');

    res.send(JSON.stringify(rows[0], null, 2));
    
})


router.get('/4', async (req, res) => {

    const [rows] = await connection.execute("SELECT * FROM `employees` WHERE `jobTitle` = 'Sales Rep';");

    res.send(JSON.stringify(rows[0], null, 2));
    
})

router.get('/5', async (req, res) => {

    const [rows] = await connection.execute("SELECT AVG(`creditLimit`) as  average FROM `customers`;");

    res.send(JSON.stringify(rows[0], null, 2));
    
})


router.get('/6', async (req, res) => {

    const [rows] = await connection.execute("SELECT DISTINCT `productName` FROM products;");

    res.send(JSON.stringify(rows[0], null, 2));
    
})



export default router;