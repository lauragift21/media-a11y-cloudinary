require('dotenv').config();
var fs = require('fs');
var cloudinary = require('cloudinary').v2;

console.log("cloud_name:"+process.env.cloud_name);

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

// File upload
cloudinary.uploader.upload('gift.mp4', {
  resource_type: "video",
  public_id: "gift",
  raw_convert: 'azure_video_indexer'
}, function(error, result) {
  console.log(result, error)
  console.log("** File Uploaded!")
})
