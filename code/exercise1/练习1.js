// 练习：批量修改文件名，将1~9文件的文件名改为01~09，其中2文件缺失，把3文件命名为2文件，以此类推，重新给文件按照1~9排序。
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);

files.forEach((item, index) => {
  // console.log(item, index);
  const fileName = item.split('-');
  const [num, name] = fileName;
  let newNum = '';
  if(Number(num) < 10) {
    newNum = `0${Number(num)}`;
    let newName = `${newNum}-${name}`;
    fs.renameSync(__dirname + `/${item}`, __dirname + `/${newName}`);
  }
})

const filesAfterChange = fs.readdirSync(__dirname);

filesAfterChange.forEach((item, index) => {
  const fileName = item.split('-');
  const [num, name] = fileName;
  if(!isNaN(Number(num))) {
    const newNum = index+1 < 10 ? `0${index+1}` : `${index+1}`;
    const newName = `${newNum}-${name}`;
    fs.renameSync(path.resolve(__dirname, `./${item}`), path.resolve(__dirname, `./${newName}`));
  }
})