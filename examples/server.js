const http = require('http'),
      path = require('path'),
      fs = require('fs');

const server = http.createServer();

const getAssetPath = (url) => {
  switch(url) {
    case '/':
    case '/index.html':
      return 'news-page/index.html';
    case '/index.js':
      return 'news-page/index.js';
    case '/index.js.map':
      return 'news-page/index.js.map';
    case '/news':
      return 'news-page/news.json';
    case '/main':
    case '/main/index.html':
      return 'main-page/index.html';
    case '/main/index.js':
      return 'main-page/index.js';
    case '/main/index.js.map':
      return 'main-page/index.js.map';
    default:
      return 'main-page/index.html';
  }
}

const getAssetContentType = (filePath) => {
  const pathElements = filePath.split('.');
  switch(pathElements[pathElements.length - 1]) {
    case 'map':
    case 'json':
      return 'application/json';
    case 'js':
      return 'text/javascript';
    case 'html':
      return 'text/html';
  }
}

server.on('request', (request, response) => {
  if (request.method === 'GET') {
    const joinedPath = path.join(__dirname, getAssetPath(request.url));
    const size = fs.statSync(joinedPath).size;
    response.writeHead(200, {
      'Content-Type': getAssetContentType(getAssetPath(request.url)),
      'Content-Length': size,
    });

    const newsStream = fs.createReadStream(joinedPath);
    newsStream.pipe(response);
  } else {
    response.writeHead(400);
    response.write('Bad request method, only GET request supported!');

    response.end();
  }
});

server.listen(80);
server.on('listening', () => {
  console.log('Example server is listening port 80, open http://localhost/ in your browser');
})
