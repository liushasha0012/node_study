/**
 * 1、自己写的模块写相对路径
 * 2、js文件和json文件可以省略后缀
 * 3、其它类型的文件导入会按照JS文件处理
 * 4、同名的JSON和JS文件，优先导入 js 文件
 */
const me = require('./me');
const testJson = require('./test');
const test = require('./test.abc');

me.coding('Sally');
me.sitting();
console.log(testJson);
console.log(test);