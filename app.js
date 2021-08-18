require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formationRoutes = require("./routes/formations");
const headerRoutes = require("./routes/header");
const devexperienceRoutes = require("./routes/devexperiences");
const nodevexperienceRoutes = require("./routes/nodevexperiences");
const hardskillsRoutes = require("./routes/hardskills");
const softskillsRoutes = require("./routes/softskills");
const { request } = require("express");
const app = express();  

mongoose.connect(process.env.MONGODB_SECRET,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log("Connexion à MongoDB réussie"))
    .catch((err) => {
        console.error(err)
        console.error("Database connexion failed")
    })

app.use(cors());
app.use(express.json());



app.use("/api/header", headerRoutes);
app.use("/api/formation", formationRoutes);
app.use("/api/experience/devexp", devexperienceRoutes);
app.use("/api/experience/nodevexp", nodevexperienceRoutes);
app.use("/api/competences/hard", hardskillsRoutes);
app.use("/api/competences/soft", softskillsRoutes);

module.exports = app;
