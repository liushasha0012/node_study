// 向网页返回一个四行三列的表格，实现隔行换色，点击高亮
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'));
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end(html);
});

server.listen(8088, () => {
  console.log('server running...');
})