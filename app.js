import { Hono } from 'hono'
const { execFile } = require('child_process');
const app = new Hono();

app.get('/route4', (c) => {
  const query = c.req.query('req');
  const child = execFile('bgpq3', ['-4', '-j', query], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return c.json({status: '500', message: ` ${error}` })
    }
    return c.json(stdout)
  });

});

app.get('/route6', (c) => {
  const query = c.req.query('req');
  const child = execFile('bgpq3', ['-6', '-j', query], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return c.json({status: '500', message: ` ${error}` })
    }
    return c.json(stdout)
  });

});

const port = 6999
console.log(`Running at http://localhost:${port}`)
export default {
  port,
  fetch: app.fetch,
}
