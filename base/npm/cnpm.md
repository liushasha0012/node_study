# cnpm
## 介绍
cnpm 是一个淘宝构建的 npmjs.com 的完整镜像，也就是淘宝镜像。部署在国内的阿里云服务器上，可以提高包的下载速度。
官方提供了一个全局工具包 cnpm，操作命令和 npm 大致相同

## 安装
```javascript
npm i cnpm -g --registry=https://registry.npmmirror.com
```

## 操作命令
和 npm 大同小异
### 初始化
```
cnpm init
```

### 安装
```
cnpm i <package>
cnpm i -S <package> // 生产环境依赖
cnpm i -D <package> // 开发环境依赖
cnpm i -g <package> // 全局安装
cnpm i // 安装项目依赖
```

### 删除依赖
```
cnpm r <package>
```
