const express = require('express');

const app = express();

// get 方法
app.get('/home', (req, res) => {
  res.send('home home');
});

// post 方法
app.post('/login', (req, res) => {
  res.send('login login');
});

// 根路由 /
app.get('/', (req, res) => {
  res.send('welcome to root path');
});

// 所有方法适用
app.all('/test', (req, res) => {
  res.send('test test');
});

// 通配路由，可以设置404
app.all('*', (req, res) => {
  res.send('404 Not Found');
});

app.listen(3000, () => {
  console.log('port 3000 is running server');
});
