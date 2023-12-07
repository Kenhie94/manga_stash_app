const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB Atlas
const dbUrl = "mongodb+srv://Kenhie_Manga:Yuru1camp2is3the4best5@mangaapp.87cpygr.mongodb.net/manga_db";
mongoose
	.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to Manga MongoDB Atlas");
	})
	.catch(error => {
		console.log("Could not connect to Manga MongoDB Atlas", error);
	});

// Create a schema and model for manga
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

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Endpoint to save manga details
app.post('Back_End/api/storeDB.js', async (req, res) => {
  const receivedID = req.body;
	try {
		const response = await axios.get(`https://api.mangadex.org/manga/${receivedID}`);
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
});

// Start the server
const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
