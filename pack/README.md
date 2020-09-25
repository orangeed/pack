# electron-pack 

>electron-pack 是基于electron的一个基本打包，方便本公司打包使用，可打包为一个纯净的不用安装的exe可执行程序。配合Inno Setup Compiler打包为可执行安装程序，在static中包含了如何将后端注册成为电脑本地服务，卸载删除，备份本地数据库，覆盖安装还原数据库。bat文件的配置只适合本公司，具体详情，可以修改bat文件适应自己公司。

## 安装

``` bash
npm install electron-pack
```

## 使用

url为打包的地址，暂时只支持网址，即将开放项目文件地址
``` bash
#引用依赖包
const { pack } from 'electron-pack'
#使用依赖包
pack(url)
```

## 运行

``` bash
npm run start
```
