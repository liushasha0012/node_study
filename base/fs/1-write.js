// 写一个座右铭.txt，内容为：明天又要上b班了
const fs = require('fs');

fs.writeFile('./base/fs/座右铭.txt', `明天又要上 b 班了 ---- ${new Date()}`, (err) => {
    if(err) {
        console.log('写入错误：', err);
    } else {
        console.log('写入成功！');
    }
})

// 流式写入 --- 适合写入频次高的场景
const ws = fs.createWriteStream('./base/fs/座右铭.txt');
ws.write('\r\n前端架构师');
ws.write('\r\n基础建设与架构设计思想');

ws.close();
