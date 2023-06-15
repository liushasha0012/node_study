const http = require('http');

// 创建服务
const server = http.createServer((request, response) => {
  console.log('request ===', request);
  console.log('response ===', response);
  // response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
  response.setHeader('content-type', 'text/plain;charset=utf-8');
  response.setHeader('access-control-allow-origin', '*');
  response.end(JSON.stringify({
    success: true,
    code: 10000,
    msg: '你好',
  }));
});

// 启动服务
server.listen(8081, () => {
  console.log('服务启动成功...');
})
