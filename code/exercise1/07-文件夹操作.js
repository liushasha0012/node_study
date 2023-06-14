const fs = require('fs');

// 创建文件夹
// fs.mkdir('./base/fs/html', (err) => {
//   if(err) {
//     console.log('创建失败~');
//     return;
//   }
//   console.log('创建成功~');
// });

// // 递归创建
// fs.mkdir('./base/fs/a/b/c', { recursive: true }, (err) => {
//   if(err) {
//     console.log('创建失败~');
//     return;
//   }
//   console.log('创建成功~');
// });

// 删除文件夹
// fs.rmdir('./base/fs/html', err => {
//   if(err) {
//     console.log('删除失败~', err);
//     return;
//   }
//   console.log('删除成功~');
// })

// 递归删除 --- 不推荐使用
// fs.rmdir('./base/fs/a', {recursive: true}, err => {
//   if(err) {
//     console.log('删除失败~', err);
//     return;
//   }
//   console.log('删除成功~');
// });

// 推荐使用
// fs.rm('./base/fs/a', {recursive: true}, err => {
//   if(err) {
//     console.log('删除失败~', err);
//     return;
//   }
//   console.log('删除成功~');
// })

// 查看文件夹里的内容
fs.readdir('./base', {recursive: true}, (err, data) => {
  if(err) {
    console.log('读取失败~', err);
    return;
  }
  console.log('读取成功~', data);
})