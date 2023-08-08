// express 内置中间件：静态资源中间件
// express.static(pathname)：接收静态资源的绝对路径作为参数，当请求静态资源时，会通过该中间件返回给客户端

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));  // express.static 会自动设置mime 类型

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000);