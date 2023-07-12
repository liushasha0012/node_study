const express = require('express');
const app = express();

// 创建路由
app.get('/request', (req, res) => {
  // 在兼容 Node 原生写法的同时，也封装了自己方法和属性
  // express 操作
  console.log(req.path); // 获取path，等同于原生 pathname
  console.log(req.query); // 获取请求参数
  console.log(req.ip); // 获取 ip
  console.log(req.get('host')); // 获取某一个请求头
  res.end('hello express!');
});

app.listen(3000, () => {
  console.log('port 3000 is running...');
})