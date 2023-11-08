// Import modules
const express = require('express')
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const MangaModelSchema = require('./models/mangaSchema');
const url = 'mongodb+srv://Kenhie_Manga:Yuru1camp2is3the4best5@mangaapp.87cpygr.mongodb.net/manga_db'

//Connection to MongoDB Atlas Database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to Manga DB');
})
.catch ((error) => {
  console.log('Cannot connect to server:', error)
});


app.get('/', (req, res) => {
  MangaModelSchema.find({})
  .then(data => {
    console.log('Retrieved data!');
    res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`)
  })
  .catch(error => {
    console.error('Error retrieving data:', error)
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})