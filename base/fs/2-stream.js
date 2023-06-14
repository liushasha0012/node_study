// 流式写入
const fs = require('fs');

const ws = fs.createWriteStream('./base/fs/座右铭.txt');
ws.write('\r\n白日依山尽');
ws.write('\r\n黄河入海流');

ws.close();