// Set up the Express server, connect to the database, and use the routes.


// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/dbConfig');
const userRoutes = require('./route/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', userRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});
