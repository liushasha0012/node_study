// 路由参数练习

const {singers} = require('./index.json');
const express = require('express');

const app = express();

app.get('/singers/:id.html', (req, res) => {
  const {id} = req.params;
  console.log(id);
  const result = singers.find(item => item.id === Number(id));
  console.log(result);
  if(!result) {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
    return;
  }
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./index.css">
    </head>
    <body>
      <h1>${result.name}</h1>
    </body>
    </html>`)
}).listen(3000, () => {
  console.log('服务正在运行...');
})