//defining methods that use the db involving user information
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '08142003',
    database: 'twitterDB',
});

const bcrypt = require('bcrypt');

//methods for creating/updating values in db

const updateBio = (req, res) => {
    const {bio, id} = req.body;
    const sqlUpdate = 'UPDATE users SET bio = ? WHERE id = ?';
    
    db.query(sqlUpdate, [bio, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        } 
    });
    return res.status(200).json({ message: 'User column "bio" updated successfully' });
};

const updateProfileImage = (req, res) => {
    const {pic, id} = req.body;
    const sqlUpdate = 'UPDATE users SET profile_image = ? WHERE id = ?';
    
    db.query(sqlUpdate, [pic, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
    return res.status(200).json({ message: 'User column "profile_image" updated successfully' });
};

const updateBGImage = (req, res) => {
    if (!req.session.loggedIn) {
        return res.status(401).json({error: "Login or signup"});
    }
    const pic = req.body.pic;
    const sqlUpdate = 'UPDATE users SET bg_image = ? WHERE id = ?';
    
    db.query(sqlUpdate, [pic, req.session.userID], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
    return res.status(200).json({ message: 'User column "bg_image" updated successfully' });
};

const updatePassword = (req, res) => {
    const {password, id} = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);
    const sqlUpdate = 'UPDATE users SET password_digest = ? WHERE id = ?';

    db.query(sqlUpdate, [hashedPass, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
    return res.status(200).json({ message: 'User column "password" updated successfully' });
};

const updateName = (req, res) => {
    const {name, id} = req.body;
    const sqlUpdate = 'UPDATE users SET name = ? WHERE id = ?';
    
    db.query(sqlUpdate, [name, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
    return res.status(200).json({ message: 'User column "name" updated successfully' });
};

//REMEMBER: update relationships as well
const addFollow = (req, res) => {
    const {id1, id2} = req.body;
    const sqlUpdate1 = 'UPDATE users SET num_followers = num_followers + 1 WHERE id = ?';
    //two updates: increment num of followers on person 1 and num followed on person 2
    db.query(sqlUpdate1, [id1], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
    const sqlUpdate2 = 'UPDATE users SET num_followed = num_followed + 1 WHERE id = ?';
    db.query(sqlUpdate2, [id2], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
    return res.status(200).json({ message: 'User column "num_followers, num_followed" updated successfully' });
}




module.exports = {
    updateBio,
    updateProfileImage,
    updateBGImage,
    updatePassword,
    updateName,
    addFollow
};