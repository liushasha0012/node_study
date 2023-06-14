const fs = require('fs');

// 可以查看单个文件也可以查看文件夹
fs.stat('./base/assets/古诗.txt', (err,data) => {
  if(err) {
    console.log('操作失败', err);
    return;
  }
  console.log('操作成功: ', data, data.isFile());
})

fs.stat('./base/assets', (err,data) => {
  if(err) {
    console.log('操作失败', err);
    return;
  }
  console.log('操作成功: ', data, data.isDirectory());
})