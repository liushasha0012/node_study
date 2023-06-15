const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // 方法一：url.parse 方法
  // const search = url.parse(req.url, true);
  // console.log('search === ', search);
  // // 获取path
  // console.log(search.path);
  // // 获取参数
  // console.log(search.query);
  // let params = search.query

  // 方法二：URL 实例对象 接受两个参数，第一个是绝对路径url，第二个可选，如果第一个是相对路径，则需要第二个参数，为url 的host部分
  const url = new URL(req.url, 'http://127.0.0.1');
  console.log(url);
  // 获取path
  console.log(url.pathname);
  // 获取参数
  console.log(url.searchParams.get('name')); // get 函数里一定要传参数
  res.end(JSON.stringify({
    success: true,
    data: {
      name: 'xiaoliu',
      age: 28,
      // ...params
    }
  }));
});

server.listen('8088', () => {
  console.log('服务启动成功...');
})