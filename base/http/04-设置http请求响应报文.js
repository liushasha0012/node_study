const http = require('http');

const server = http.createServer((req, res) => {
  // 设置响应状态码
  // res.statusCode = 204;
  // 设置响应状态码描述
  // res.statusMessage = 'xixixi';
  // 设置响应头
  res.setHeader('content-type', 'text/plain;charset=utf-8');
  // 设置自定义响应头
  res.setHeader('myHeader', 'hei hei hei');
  // 设置多个同名响应头
  res.setHeader('test', ['a', 'b', 'c']);
  // 设置响应体 —— write 方法可以多次调用，end方法只能调用一次
  res.write('set response body');
  res.write('\nset response body');
  res.write('\nset response body');
  res.end();
});

server.listen(8088, () => {
  console.log('服务启动成功~');
})