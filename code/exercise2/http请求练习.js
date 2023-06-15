// 请求方法是get，请求路径是/logn，返回登录页面，请求路径是/register，返回注册页面
const http = require('http');

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, 'http://127.0.0.1');
  const {pathname} = myUrl;
  let resStr = '兜底页面';
  console.log('method === ', req.method);
  if(req.method.toLocaleLowerCase() === 'get') {
    if(pathname.indexOf('/login') !== -1) {
      resStr = '登录页面';
    }
    if(pathname.indexOf('/register') !== -1) {
      resStr = '注册页面';
    }
  }
  res.setHeader('content-type', 'text/plain;charset=utf-8')
  res.end(resStr)
});

server.listen(8088, () => {
  console.log('服务启动成功~');
})