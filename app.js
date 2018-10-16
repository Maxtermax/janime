const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT;

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html', 'utf8');
})
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});