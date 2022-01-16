const express = require('express');

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("PUERTO 3000");
});



app.get('/home', (req, res) => {
    console.log('te llevo al home');
    res.sendFile(__dirname + '/views/home.html');
  });

  app.get('/about', (req, res) => {
    console.log('te llevo al about');
    res.sendFile(__dirname +'/views/about.html');
  });

  app.get('/works', (req, res) => {
    console.log('te llevo al works');
    res.sendFile(__dirname + '/views/works.html');
  });

  app.get('/gallery', (req, res) => {
    console.log('te llevo a la gallery');
    res.sendFile(__dirname + '/views/gallery.html');
  });

  app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
  });

    
      