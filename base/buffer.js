// buffer 是什么？是一段大小固定的内存空间，专门用来处理二进制数据，性能较好，可以操作计算机内存；每个元素大小为 1bytes

// 1- 创建buffer
// 1. alloc 方式创建 --- 在创建的时候二进制的每一位都会归零
const buf = Buffer.alloc(10);
console.log(buf);

//2. allocUnsafe 创建 --- 创建速度快，但是不会归零，所以可能会有上一次程序执行的数据
const buf_2 = Buffer.allocUnsafe(1000);
console.log(buf_2);

// from 创建 --- 可以把字符串、数组转换为buffer，转换规律是：找到字符在 unicode 里面对应的数字，然后转换为十六进制
const buf_3 = Buffer.from('hello');
console.log('buf_3 === ', buf_3);
const buf_4 = Buffer.from([10, 12, 14, 15]);
console.log('buf_4 === ', buf_4);

// buffer 的操作
// 1-buffer值转换为字符串
const buf_5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log('buf_5 === ', buf_5, buf_5.toString());

// 2- 以下标的方式取buffer的某一位
console.log('buf_5[0] === ', buf_5[0].toString(2));

// 3-修改buffer
buf_5[0] = 95;
console.log('修改后', buf_5, buf_5.toString());

// 4- 溢出，8位的二进制最大能保存的值是255，超出255的数，则会造成 buffer 溢出。buffer溢出的规则是：丢弃高位
buf_5[0] = 361;
let n = 361;
console.log(n.toString(2)); // 101101001，只保留低8位，高位丢弃之后，值为 01101001
console.log('溢出: ', buf_5[0].toString(2));

// 5- 中文，中文字符是 utf-8，所以一个字符对应三个字节
const buf_6 = Buffer.from('你好');
console.log('buf_6 === ', buf_6); // <Buffer e4 bd a0 e5 a5 bd>

