const fs = require('fs');
const ytdl = require('ytdl-core');


module.exports.downloadVideo = async (req, res) => {
  console.log('controller called');
  const url = req.query.url;
  await ytdl(url)
  .pipe(fs.createWriteStream(`Downloads/vedio.mp4`));
  res.end();  
};
