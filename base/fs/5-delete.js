const fs = require('fs')

// unlink 删除方式
fs.unlink('./base/assets/如何学习React源码-3.mp4', err => {
  if(err) {
    console.log('删除失败~');
    return;
  }
  console.log('删除成功~');
});

// 同步unlink
console.log('开始删除...');
fs.unlinkSync('./base/assets/如何学习React源码-2.mp4');
console.log('删除成功！');

// 创建文件
let data = fs.readFileSync('./base/assets/古诗.txt');
fs.writeFileSync('./base/assets/古诗-2.txt', data);

// rm 方式 —— 14.14.0新增
fs.rm('./base/assets/古诗-2.txt', err=>{
  if(err) {
    console.log('操作失败！', err.code, err.path);
    return;
  }
  console.log('操作成功！');
})
// rm同步方式
try{
  fs.rmSync('./base/assets/古诗-2.txt');
  console.log('删除成功！');
} catch(err) {
  if(err) {
    console.log('出现错误：', err);
  }
}