// 相对路径的参照是：命令行执行的工作目录
// 因此，程序中使用参照目录存在一个坑：命令行执行的工作目录发生改变，程序执行结果会发生改变，因此使用绝对路径是最稳定的。

// 绝对路径：使用__dirname —— __dirname表示当前代码所在文件的所在目录的绝对路径。
// 例如，在本文件中使用 __dirname，得到的值是：/Users/didi/Documents/study/node_study/base/fs
console.log('绝对路径：', __dirname);

const fs= require('fs');
fs.writeFileSync(__dirname + '/index.html', '<html><body><p>这里是一个p标签</p></body></html>');