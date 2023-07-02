// 向网页返回一个四行三列的表格，实现隔行换色，点击高亮
const http = require('http');
const fs = require('fs');
const path = require('path');
const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://127.0.0.1');
  console.log('pathname ===', pathname);
  // 拼接路径
  const filePath = path.resolve(
    __dirname,
    '../../code/exercise2/page' + pathname
  );
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('content-type', 'text/plain;charset=utf-8');
      res.end('读取文件失败');
      return;
    }
    // 获取后缀
    const extname = path.extname(filePath).slice(1);
    res.setHeader('content-type', mimes[extname]);
    res.end(data);
  });
});

server.listen(8088, () => {
  console.log('server running...');
});
