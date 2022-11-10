const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dwm4lamyq',
  api_key: '258214278338251',
  api_secret: 'nI0L4jey138HX9gtuTThCsxuXdo',
  secure: true,
});

module.exports = cloudinary;
