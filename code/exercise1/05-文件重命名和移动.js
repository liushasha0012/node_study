// 重名和移动文件本质是修改文件的路径
const fs = require('fs');
// 重命名
fs.rename('./base/fs/座右铭.txt', './base/fs/古诗.txt', err => {
  if(err) {
    console.log('操作失败！');
    return;
  }
  console.log('操作成功！');
})

// 移动
fs.rename('./base/fs/古诗.txt', './base/assets/古诗.txt', err => {
  if(err) {
    console.log('操作失败！');
    return;
  }
  console.log('操作成功！');
})

// 同步操作
console.log('开始改名');
fs.renameSync('./座右铭.txt', './箴言.txt');
console.log('改名成功');
fs.renameSync('./箴言.txt', './base/assets/箴言.txt');
console.log('移动成功！')
