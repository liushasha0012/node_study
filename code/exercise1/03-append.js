// 追加写入
const fs = require('fs');

fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err => {
  if(err) {
    console.log('写入失败~~', err);
    return;
  }
  console.log('写入成功！');
});

console.log('after write');

fs.appendFile('./座右铭.txt', '\n择其善者而从之，其不善者而改之', err => {
  if(err) {
    console.log('追加失败！');
    return;
  }
  console.log('追加成功！');
})

fs.writeFile('./座右铭.txt', '\n温故而知新，可以为师矣', {flag: 'a'}, err => {
  if(err) {
    console.log('追加失败！~');
    return;
  }
  console.log('追加成功~');
})