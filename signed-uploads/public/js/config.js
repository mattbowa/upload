const cloudinary = require("cloudinary").v2;

// Configure your cloud name, API key and API secret:

/*
const myconfig = cloudinary.config({
  cloud_name: '<your_cloud_name>',
  api_key: '<your_api_key>',
  api_secret: '<your_api_secret>',
  secure: true
});
*/

const myconfig = cloudinary.config({
  cloud_name: "djkwd42xt",
  api_key: "875536695552382",
  api_secret: "MsLomAYJ8DFTHbBxMkIiq5M-xYY",
  secure: true,
});

exports.myconfig = myconfig;
