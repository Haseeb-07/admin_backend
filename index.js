const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const packageRoutes = require('./routes/packageRoutes');
const destinationRoutes = require('./routes/destinationRoutes'); // Import destination routes
const loginAdminRoutes = require('./routes/loginAdminRoutes');
const pendingBookingRoutes = require('./routes/pendingBookingRoutes');
const confirmBookingRoutes = require('./routes/confirmBookingRoutes');
const getConfirmedRoutes = require('./routes/getConfirmedRoutes');
const getallCustomizedRoute = require('./routes/getallCustomizedRoute');
const SignupUserController = require('./controllers/signupUserController');
dotenv.config(); // Load .env file

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch(err => {
  console.error("Error connecting to MongoDB", err);
});

app.use('/api/packages', packageRoutes);
app.use('/api/destinations', destinationRoutes); // Mount destination routes
app.use('/admin', loginAdminRoutes);
app.use('/api', pendingBookingRoutes);
app.use('/api', confirmBookingRoutes);
app.use('/api', getConfirmedRoutes);
app.use('/customized-packages', getallCustomizedRoute);
app.get('/users', SignupUserController.getAllUsers);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
