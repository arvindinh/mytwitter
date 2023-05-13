const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '08142003',
    database: 'twitterDB',
});

const createTweet = (req, res) => {
    const { content, user_id, created_at, media } = req.body;
    const sqlInsert = 'INSERT INTO tweets (content, user_id, created_at, media) VALUES (?,?,?,?)';
    const values = [content, user_id, created_at, media];

    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }
        return res.status(200).json({message: 'Tweet created successfully'});
    })
}

const getTweets = (req, res) => {
    const user_id = req.body.user_id;
    const sqlSelect = 'SELECT * FROM Tweets WHERE user_id = ? ORDER BY created_at ASC';

    db.query(sqlSelect, [user_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }
        return res.status(200).json({message: result});
    })
};

module.exports = {
    createTweet,
    getTweets
};