// 向网页返回一个四行三列的表格，实现隔行换色，点击高亮
const http = require('http');

const server = http.createServer((req, res) => {
  res.end(``);
});

server.listen(8088, () => {
  console.log('server running...');
})