// 向网页返回一个四行三列的表格，实现隔行换色，点击高亮
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://127.0.0.1');
	console.log('pathname ===', pathname);
  // 拼接路径
  const filePath = path.resolve(__dirname, '../../code/exercise2/page' + pathname);
	console.log('filePath', filePath);
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('content-type', 'text/plain;charset=utf-8')
      res.end('读取文件失败');
      return;
    }
    res.end(data);
  });
});

server.listen(8088, () => {
  console.log('server running...');
});
