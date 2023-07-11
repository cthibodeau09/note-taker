const express = require('express');

const app = express();


const PORT = process.env.PORT || 3001;


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});
