# bgpq3 web api
## API usage
``/route4?req={query}``<br>
It will exec ``bgpq3 -4 -j ${query} `` <br>
And it will output json format.<br>
<br>
``/route6?req={query}``<br>
It will exec ``bgpq3 -64 -j ${query} `` <br>
And it will output json format.
## Install on host
You must install bgpq3 on host first.
```
npm i
node app.js
```
And it will run on port 6999.
## Install via docker compose
You must install docker compose on host first.
```
docker compose up -d
or
docker-compose up -d
```
And it will run on port 6999.


