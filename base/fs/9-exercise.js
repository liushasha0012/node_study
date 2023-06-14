// 练习：复制文件，复制一个视频文件到base/assets目录下
const fs = require('fs');
const process = require('process');
// 1. 同步方式
// const data = fs.readFileSync('/Users/didi/Documents/学习资料/自顶向下学React源码_卡颂(1)/第一章 理念篇/1.1 如何学习React源码.mp4');
// fs.writeFileSync('./base/assets/如何学习React源码.mp4', data);
// console.log('复制成功！内存使用量: ', process.memoryUsage()); // 70402048KB

// 2. 异步方式
// fs.readFile('/Users/didi/Documents/学习资料/自顶向下学React源码_卡颂(1)/第一章 理念篇/1.1 如何学习React源码.mp4', (err, data) => {
//   if(err) {
//     console.log('文件读取失败！');
//     return;
//   }
//   fs.writeFile('./base/assets/如何学习React源码-2.mp4', data, err => {
//     if(err) {
//       console.log('文件复制失败！');
//       return;
//     }
//     console.log('文件复制成功！内存使用量：', process.memoryUsage()); // 70467584KB
//   })
// });

// 3. 文件流方式
const rs = fs.createReadStream('/Users/didi/Documents/学习资料/自顶向下学React源码_卡颂(1)/第一章 理念篇/1.1 如何学习React源码.mp4');
const ws = fs.createWriteStream('./base/assets/如何学习React源码-3.mp4');
rs.on('data', chunks => {
  ws.write(chunks);
});
rs.on('end', err => {
  if(err) {
    console.log('文件读取失败了', err);
    return;
  }
  ws.close();
  console.log('流式复制成功！内存使用量：', process.memoryUsage()); // 61276160 KB
})

// 总结：流式复制文件的方式，占用的内存最小，因为其它方式是整个文件的读取与写入，而流式是以分片的形式，每次占用内存空间小。