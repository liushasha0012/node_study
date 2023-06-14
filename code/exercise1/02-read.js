// 异步读取文件
const fs = require('fs');
fs.readFile('./base/fs/座右铭.txt', (err, data) => {
  if(err) {
    console.log('文件读取失败');
    return;
  }
  console.log('文件读取成功。内容如下：', data.toString());
});
console.log('开始读取');

// 同步读取文件
let data = fs.readFileSync('./base/fs/座右铭.txt');
console.log('读取完成。', data.toString());

// 流式读取，是同步读取，读取大文件时可以提升效率
// 1. 创建读取流
const rs = fs.createReadStream('./base/fs/座右铭.txt');

//2. 绑定data事件
rs.on('data', chunks => {
  console.log(chunks.length);
});

// 3. 绑定end 事件，结束流读取
rs.on('end', err => {
  console.log('读取结束! ', err);
});
