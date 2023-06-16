// 向网页返回一个四行三列的表格，实现隔行换色，点击高亮
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const {pathname} = new URL(req.url, 'http://127.0.0.1');
  if (pathname === '/') {
    const html = fs.readFileSync(path.resolve(__dirname, './page/index.html'));
    res.end(html);
  } else if (pathname === '/index.css') {
    const css = fs.readFileSync(path.resolve(__dirname, './page/index.css'));
    res.end(css);
  } else if (pathname === '/index.js') {
    const js = fs.readFileSync(path.resolve(__dirname, './page/index.js'));
    res.end(js);
  } else {
    res.statusCode = 404;
    res.end('<h1>Not found</h1>')
  }
});

server.listen(8088, () => {
  console.log('server running...');
});
