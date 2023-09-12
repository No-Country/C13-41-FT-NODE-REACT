const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/index') 


// Middleware

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'))
app.use('/api/v1', indexRouter)

//default request return not found
app.use('/',(req,res,next)=> {
  return res.status(404).end()
})
//Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
