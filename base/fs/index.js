// 写一个座右铭.txt，内容为：明天又要上b班了
const fs = require('fs');

fs.writeFile('./base/fs/座右铭.txt', `明天又要上 b 班了 ---- ${new Date()}`, (err) => {
    if(err) {
        console.log('写入错误：', err);
    } else {
        console.log('写入成功！');
    }
})