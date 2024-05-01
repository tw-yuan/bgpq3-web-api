# bgpq3 web api
## Install
You must install bgpq3 on host first.
```
npm i
node app.js
```
## API usage
``/route4?req={query}``
It will exec ``bgpq3 -4 -j ${query} `` 
And it will output json format.

``/route6?req={query}``
It will exec ``bgpq3 -64 -j ${query} `` 
And it will output json format.
