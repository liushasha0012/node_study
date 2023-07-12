const express = require('express');
const app = express();

// 创建路由
app.get('/', (req, res) => {
  res.end('hello express!');
});

app.listen(3000, () => {
  console.log('port 3000 is running...');
})