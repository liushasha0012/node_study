const express = require('express');
const app = express();

app.get('/response', (req, res) => {
  // 原生响应
  // res.statusCode = 500;
  // res.statusMessage = 'Not See';
  // res.setHeader('hhh', 'heiheihei');
  // res.setHeader('content-type', 'text/html;charset=utf-8');
  // res.write('lueluelue'); // 响应体
  // res.end('到此为止'); // 响应体

  // express 响应
  // res.status(200);
  // res.set('aaa', 'bbb');
  // res.send('hi express server');

  // express 可以链式操作
  // res.status(302).set('xxx', 'yyy').send('hi express server');

  // 重定向操作
  // res.redirect('http://baidu.com/');

  // 下载响应
  // res.download(__dirname + '../../../README.md');

  // JSON 响应
  // res.json({
  //   name: '尚硅谷',
  //   slogan: '让天下没有难学的技术'
  // });

  // 响应文件内容
  res.sendFile(__dirname + '/01-初体验.js');
}).listen(3000);
