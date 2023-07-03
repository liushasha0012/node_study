function require(file) {
  // 1. 将相对路径转为绝对路径。定位目标文件
  const absoltePath = path.resolve(__dirname, file);
  // 2. 缓存检测
  if(caches[absoltePath]) {
    return caches[absoltePath];
  }
  // 3. 读取目标文件代码
  const code = fs.readFileSync(absoltePath).toString();
  // 4. 包裹为一个函数并执行
  let module = {};
  let exports = module.exports = {};
  (function (exports, require, module, __filename, __dirname) {
    const test = {
      name: '尚硅谷'
    }
    module.exports = test;

    console.log(arguments.callee.toString());
  })(exports, require, module, __filename, __dirname)

  // 5. 缓存结果
  caches[absoltePath] = module.exports; // 伪代码，实际上 require 内部缓存的不是 module.exports

  // 6. 返回 module.exports 的值
  return module.exports;
}