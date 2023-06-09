const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const { ApolloServer } = require('apollo-server-express');
//const { resolvers, typeDefs } = require('./src/graphql/schema');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');


const app = express();

// Create a MySQL connection pool

const authMiddleware = (req, res, next) => {
  const token  = req.headers.authorization;
  
}



// Enable CORS

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
// Serve the React app from the "build" directory
app.use(express.static(path.join(__dirname, 'client', 'build')));
//app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
/*
// Set up the Apollo Server with GraphQL schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Pass the MySQL connection pool to the resolver context
    return { pool };
  },
});
*/

// Apply the Apollo middleware to the Express app
//server.applyMiddleware({ app });


/*
// Set up the API endpoints
app.get('/api/tweets', (req, res) => {
  pool.query('SELECT * FROM tweets', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Serve the index.html file for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.post('/api/insert', (req,res) => {
    const sqlInsert = "INSERT INTO test (text) VALUES (?)";
    pool.query(sqlInsert, [req.body.text], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting");
        } else {
            console.log(result);
            res.status(200).send("inserted!!");
        }
    });
})
*/
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/user', userRoutes);
app.use('/api/tweet', tweetRoutes);
app.use('/api/auth', authRoutes);
// Start the server
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
