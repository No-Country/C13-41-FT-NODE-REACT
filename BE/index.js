const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')

// Middleware

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/',(req,res,next)=> {
  return res.send("running").end
})

//Routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
