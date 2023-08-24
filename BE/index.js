const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')

const patients = require('./routes/patientsRoutes.js')
const medics = require('./routes/medicsRoutes.js')

// Middleware

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', patients)
app.use('/api/v1/', medics)

app.get('/',(req,res,next)=> {
  return res.send("running").end
})

//Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
