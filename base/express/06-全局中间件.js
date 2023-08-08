// 全局中间件，作用于所有路由
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// 创建中间件
const recordMiddleware = (req, res, next) => {
  // 记录请求的时间、url 和 ip
  const {url, ip} = req;
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${new Date()}: ${url} ${ip}\n\r`, (err, data) =>{
    if(err){
      console.log(err);
      return;
    }
  });
  next();  // 中间件内置函数，意为调用下一个中间件或是路由的回调参数
};

// 使用中间件
app.use(recordMiddleware);

app.get('/home', (req, res) => {
  res.send('前台首页');
});

app.get('/admin', (req, res) => {
  res.send('后台首页');
});

app.listen(3000, () => {
  console.log('server is running');
});