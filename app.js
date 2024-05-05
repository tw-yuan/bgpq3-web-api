const express = require('express');
const { execFile } = require('child_process');
const app = express();

app.get('/route4', (req, res) => {
  const query = req.query.req;
  const child = execFile('bgpq3', ['-4', '-j', query], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error occurred.`);
    }

    res.send(stdout);
  });

});

app.get('/route6', (req, res) => {
  const query = req.query.req;
  const child = execFile('bgpq3', ['-6', '-j', query], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error occurred.`);
    }
    
    res.send(stdout);
  });

});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
