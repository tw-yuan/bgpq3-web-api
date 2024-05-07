const express = require('express');
const { execFile } = require('child_process');
const app = express();

function splitSentence(input) {
  input = input.toUpperCase();
  if (input.includes('::')) {
    const parts = input.split('::');
    return [parts[0].trim(), parts[1].trim()];
  } else {
    return ['NO_IRR', input.trim()];
  }
}

app.get('/route4', (req, res) => {
  if (req.query.req === undefined) {
    var query = "NO_INPUT";
  } else {
    var query = req.query.req;
  }
  query = splitSentence(query);
  const child = execFile('bgpq3', ['-4', '-j', query[1]], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ 'error': 'Error occurred.' });
    }
    res.json(JSON.parse(stdout));
  });
});

app.get('/route6', (req, res) => {
  if (req.query.req === undefined) {
    var query = "NO_INPUT";
  } else {
    var query = req.query.req;
  }
  query = splitSentence(query);
  const child = execFile('bgpq3', ['-6', '-j', query[1]], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ 'error': 'Error occurred.' });
    }
    res.json(JSON.parse(stdout));
  });
});

app.listen(3001, () => {
  console.log(`Server is running on port 3000`);
});
