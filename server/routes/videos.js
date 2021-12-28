// const { response } = require('express');
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/**
 * Get all videos
 */
router.get("/videos", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      response.json(JSON.parse(data));
    }
  });
});

/**
 * Get single video by id
 */
router.get("/videos/:id", (request, response) => {
  console.log(request.params.id);
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    }

    const videoData = JSON.parse(data);
    const foundVideo = videoData.find((video) => video.id == request.params.id);
    if (!foundVideo) {
      response.json({ message: "error getting video data" });
    } else {
      response.json(foundVideo);
    }
  });
});

router.post("/videos", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      console.log("attempting to write file");
      // response.json(JSON.parse(data));
      const title = request.body.title;
      const description = request.body.description;
      let vidData = JSON.parse(data);
      vidData.push({
        id: uuidv4(),
        title: `${title}`,
        channel: "Emily Harper",
        image:"http://localhost:8080/images/uploadVideoPreview.jpg",
        description: `${description}`,
        views: "67,567",
        likes: "75,985",
        duration: "4:20",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1632344461000,
        comments: [ {
          "id": "c93c16f0-4795-45d1-b0da-21696d54f25a",
          "name": "Fionna Miller",
          "comment": "Location location location! It blows my mind how many people don’t understand this, but you’ve summed it up so well here. The next time I travel, I’ll be on the beachfront.",
          "likes": 6,
          "timestamp": 1631816492000
        },
        {
          "id": "99938bd4-67f9-4404-ad3e-b23a6ad05717",
          "name": "Suzie Maxwell",
          "comment": "I wish I could print out a video to show to my travel agent. Oh, what am I saying – they have a computer! Much appreciated advice, I can’t wait to put it into action soon.",
          "likes": 1,
          "timestamp": 1631799181000
        },
        {
          "id": "fc2e9a8c-7daa-4e14-980d-5467ca2054ec",
          "name": "Alasie Rivers",
          "comment": "From five-star hotels to the cheapest spots – wherever you like to stay, THIS is the way to do it! I’ll take sunlight and a cozy reading corner over a pool any day of the week.",
          "likes": 0,
          "timestamp": 1631716921000
        }]
      });

      fs.writeFileSync("./data/videosdetails.json", JSON.stringify(vidData)),
        console.log(request.body.title);
      response.send("file written successfully");
    }
  });
});

module.exports = router;
