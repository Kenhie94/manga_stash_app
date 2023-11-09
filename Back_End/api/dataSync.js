const axios = require("axios");
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://Kenhie_Manga:Yuru1camp2is3the4best5@mangaapp.87cpygr.mongodb.net/manga_db";

// Connect to your MongoDB Atlas database
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define a Mongoose schema and model for your data
const mangaSchema = new mongoose.Schema({
  // Define your schema fields here
  type: {
    type: String,
  },
  title: {
    type: String,
  }
});
const MangaDB = mongoose.model("MangaDB", mangaSchema);

// Function to fetch data from an API and store it in your database
async function fetchDataAndStore() {
  try {
    const response = await axios.get("https://api.mangadex.org/manga/1ee97895-4796-4bcf-bcd1-5ef99c011f8b");
    const apiData = response.data.data; // Assuming the data is in an appropriate format
    console.log("API DATA:", apiData);

    // Process the data and create new documents in your Atlas database
    const newData = new MangaDB({
      type: apiData.type,
      title: apiData.attributes.title.en,
    });

    const savedData = await newData.save(); // Save the new document to your database
    console.log("Data stored in your database.", savedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to fetch and store data
fetchDataAndStore();
