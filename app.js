const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {register} = require('./Routes/AuthRoute')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const AuthRoute = require('./Routes/AuthRoute');
app.use('/api/auth', AuthRoute);

//app.use('/api/auth/register', register)

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});