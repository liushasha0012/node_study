// path 模块的学习
// 最重要的api: resolve：拼接规范的绝对路径，第一个参数为绝对路径：__dirname，后面的参数为相对路径
const path = require('path');
const apath = path.resolve(__dirname, './index.html');
console.log('a', apath);
const bpath = path.resolve(__dirname, '../index.html');
console.log('b', bpath);

// seq —— 获取操作系统的路径的分隔符
const sep1 = path.sep;
console.log('sep1===', sep1);

// parse ---解析路径并返回对象
const pathObj = path.parse(__filename);
console.log('pathObj === ', pathObj);


// basename --- 获取路径的基础名称
const baseName = path.basename(__filename);
console.log('baseName === ', baseName);

// dirname --- 获取路径的目录名
const dirName = path.dirname(__filename);
console.log('dirName === ', dirName);

// extname --- 获取路径的拓展名
const extName = path.extname(__filename);
console.log('extName === ', extName);