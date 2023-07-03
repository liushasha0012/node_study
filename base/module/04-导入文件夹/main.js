/**
 * 导入文件夹的规则：
 * 1、首先检测该文件夹下 package.json 文件中 main 属性对应的文件，如果存在则导入，反之如果文件不存在则会报错；如果 main 属性不存在或者没有package.json文件，则会尝试导入 index.js 和 index.json，如果还是没有找到，就会报错
 * 2、导入 node.js 内置模块时，直接 require 模块的名字即可，无需加 ./ 和 ../
 * 3、package.json 中的main属性优先级高于 index.js
 */

const m = require('./module');
console.log('@m ', m);