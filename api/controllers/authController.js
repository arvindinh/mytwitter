const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '08142003',
    database: 'twitterDB',
});

const bcrypt = require('bcrypt');

//aka sign-up function
const createUser = (req, res) => {
    const { username, email, password, created_at, name } = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);
    const sqlInsert = 'INSERT INTO users (username, email, password_digest, created_at, name, num_followers, num_followed) VALUES (?,?,?,?,?,?,?)';
    const values = [username, email, hashedPass, created_at, name, 0, 0];

    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            if (err.code = 'ER_DUP_ENTRY') {
                return res.status(400).json({message: 'Email already in use. Please choose another email.'});
            } else {
                console.error(err);
                return res.status(500).json({message: 'Internal server eroor'});
            }
        }
        const token = jwt.sign({userID: result.insertId, username: username}, 'secret');
        res.set('Authorization', `Bearer ${token}`);
        res.status(201).json({ message: 'Sign-up successful', user: username });
    });
};

const signIn = (req, res) => {
    const { username, password } = req.body;
    const sqlSelect = 'SELECT password_digest, id FROM users WHERE username = ?';
    db.query(sqlSelect, [username], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }

        if (result.length === 0) {
            return res.status(401).json({error: 'User does not exist'});
        }
        const storedHashedPass = result[0].password_digest;

        bcrypt.compare(password, storedHashedPass, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({error: "Internal server error"});
            }

            if (!isMatch) {
                return res.status(401).json({error: 'Invaid credentials'});
            }
            const token = jwt.sign({userID: result[0].id, username: username}, 'secret');
            res.set('Authorization', `Bearer ${token}`);
            res.status(201).json({ message: 'Sign-up successful', user: username });
        });

    });

}

module.exports = {
    signIn,
    createUser
};