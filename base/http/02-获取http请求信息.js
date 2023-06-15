const http = require('http');

// 创建服务
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/plain;charset=utf-8');
  response.setHeader('access-control-allow-origin', '*');
  // 获取请求方法
  console.log('请求方法：', request.method);
  // 获取请求的url，这个url不包含域名和端口，只包含路径和查询字符串
  console.log('url：', request.url);
  // 获取http版本号
  console.log('http version：', request.httpVersion);
  // 获取请求头
  console.log('http request headers：', request.headers);
  // 获取某一个特定的请求头
  console.log('host header：', request.headers.host);
  // 获取请求体
  let body = '';
  // 绑定 data 事件
  request.on('data', chunks => {
    body += chunks;
  });
  // 绑定 end 事件
  request.on('end', () => {
    console.log('body：', body);
    response.end(JSON.stringify({
      success: true,
      code: 10000,
      msg: '你好',
    }))
  })
});

// 启动服务
server.listen(8082, () => {
  console.log('服务启动成功...');
})
