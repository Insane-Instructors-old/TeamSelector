const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.get("/testing", (request, response) => {
  response.send("New Back end message");
});

app.get("/markers", (request, response) => {
  response.json([
    {
        title:'The marker`s title will appear as a tooltip.',
        name:'SOMA',
        position:{lat: 37.778519, lng: -122.405640}
    },
    {
        name:'Dolores park',
        position:{lat: 37.759703, lng: -122.428093}
    }
])
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
