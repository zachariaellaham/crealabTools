const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
  console.log('Server works at port 4000');
})

app.get('/download', async (req, res) => {
  var URL = req.query.URL || 'https://www.youtube.com/watch?v=tPEE9ZwTmy0&ab_channel=MylotheCat ';
  var mp3 = req.query.mp3;
  var videoInfo = await ytdl.getInfo(URL);


  if(mp3 === 'true'){
    res.header('Content-Disposition', `attachment; filename="${videoInfo.videoDetails.title}.mp3"`)
    ytdl(URL, {
      quality:"highestaudio",
      filter: 'audioonly'
    }).pipe(res);
  }

  else {
    res.header('Content-Disposition', `attachment; filename="${videoInfo.videoDetails.title}.mp4"`)
    ytdl(URL, {
      quality:"highestvideo",
      format: 'mp4'
    }).pipe(res);
  }

})
