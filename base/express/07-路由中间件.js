/**
 * 针对 /admin、/setting 的请求，要求 URL 携带 code=521 参数，如未携带提示【暗号错误】
 */

// 全局中间件，作用于所有路由
const express = require('express');

const app = express();

// 创建中间件
const checkCodeMiddleware = (req, res, next) => {
  // 记录请求的时间、url 和 ip
  const {code} = req.query;
  if(code === '521') {
    next(); // 执行路由回调
  } else {
    res.send('暗号错误');
  }
};


app.get('/home', (req, res) => {
  res.send('前台首页');
});

// 局部使用中间件
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页');
});

app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('设置页面');
});

app.listen(3000, () => {
  console.log('server is running');
});