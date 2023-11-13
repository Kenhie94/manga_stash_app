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
  },
  altTitles: [
    {
      type: Array,
    },
  ],
  description: {
    type: Array,
  },
  originalLanguage: {
    type: String,
  },
  lastVolume: {
    type: String,
  },
  lastChapter: {
    type: String,
  },
  publicationDemographic: {
    type: String,
  },
  status: {
    type: String,
  },
  year: {
    type: Number,
  },
  contentRating: {
    type: String,
  },
  tags: [
    {
      type: Array,
    },
  ],
  links: {
    type: Array,
  },
});
const MangaDB = mongoose.model("MangaDB", mangaSchema);

// Function to fetch data from an API and store it in your database
async function fetchDataAndStore() {
  const mangaID = [
    "c52b2ce3-7f95-469c-96b0-479524fb7a1a",
    "1ee97895-4796-4bcf-bcd1-5ef99c011f8b",
    "882b1e22-ac83-4613-b8f1-7c48138fa584",
    "6b958848-c885-4735-9201-12ee77abcb3c",
  ];
  for (let i = 0; i < mangaID.length; i++) {
    try {
      const response = await axios.get(`https://api.mangadex.org/manga/${mangaID[i]}`);
      const apiData = response.data.data; // Assuming the data is in an appropriate format
      console.log("API DATA:", apiData);

      // Process the data and create new documents in your Atlas database
      const newData = new MangaDB({
        type: apiData.type,
        title: apiData.attributes.title.en,
        altTitles: apiData.attributes.altTitles,
        description: apiData.attributes.description,
        originalLanguage: apiData.attributes.originalLanguage,
        lastVolume: apiData.attributes.lastVolume,
        lastChapter: apiData.attributes.lastChapter,
        publicationDemographic: apiData.attributes.publicationDemographic,
        status: apiData.attributes.status,
        year: apiData.attributes.year,
        contentRating: apiData.attributes.contentRating,
        tags: apiData.attributes.tags,
        links: apiData.attributes.links,
      });

      const savedData = await newData.save(); // Save the new document to your database
      console.log("Data stored in your database.", savedData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

// Call the function to fetch and store data
fetchDataAndStore();
