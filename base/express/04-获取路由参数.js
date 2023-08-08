const express = require('express');

const app = express();

app.get('/:id.html', (req, res) => {
  // 获取路由参数
  const {id} = req.params;
  console.log('id: ', id);
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});