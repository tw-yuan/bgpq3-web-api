const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/route4', (req, res) => {
  const query = req.query.req;
  const command = `bgpq3 -4 -j ${query}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error executing command: ${error}`);
    }

    res.send(stdout);
  });
});

app.get('/route6', (req, res) => {
  const query = req.query.req;
  const command = `bgpq3 -6 -j ${query}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error executing command: ${error}`);
    }

    res.send(stdout);
  });
});

const port = process.env.PORT || 6999;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
