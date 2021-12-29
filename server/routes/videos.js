// const { response } = require('express');
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/**
 * Get all videos
 */
// router.get("/videos", (request, response) => {
  router.get("/", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      response.json(JSON.parse(data));
    }
  });
});


// router.post("/videos", (request, response) => {
  router.post("/", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      console.log("attempting to write file");
      // response.json(JSON.parse(data));
      const part_number = request.body.part_number;
      const tag_number = request.body.tag_number;
      const rack_number = request.body.rack_number;
      const quantity = request.body.quantity;
      const location = request.body.location;
      const message = request.body.message;
      let vidData = JSON.parse(data);
      vidData.push({
        id: uuidv4(),
        part_number: `${part_number}`,
        rack_number: `${rack_number}`,
        tag_number: `${tag_number}`,
        quantity: `${quantity}`,
        location: `${location}`,
        message: `${message}`
      });

      fs.writeFileSync("./data/videosdetails.json", JSON.stringify(vidData)),
        console.log(request.body.quantity);
      response.send("file written successfully");
    }
  });
});

module.exports = router;
