function coding(name) {
  console.log(name + ' 正在写代码');
}

function sitting() {
  console.log('坐下了...');
} 

// 暴露数据
// module.exports = {
//   coding,
//   sitting
// };

// exports 方式暴露数据
// exports.coding = coding;
// exports.sitting = sitting;

/**
 * 注意事项
 * 1、module.exports 可以暴露任意数据
 * 2、module.exports 可以写多个，不过只有最后一个起作用，后面的会覆盖前面的
 */
// 字符串
module.exports = '好好上班';
// 数字
module.exports = 122;

// 3、不能使用 exports = value 的形式暴露数据
// exports = 'value';
// 4、 exports === module.exports = {}
console.log(exports === module.exports)