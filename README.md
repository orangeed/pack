# electron打包

[![Build Status](https://travis-ci.org/wulv/del-expired-file.png)]()
[![npm version](https://badge.fury.io/js/electron-pack.svg)](https://badge.fury.io/js/electron-pack)

> <strong style="color:#e68414">electron-pack</strong> 是基于electron的一个基本打包，方便本公司打包使用，可打包为一个纯净的不用安装的exe可执行程序。配合Inno Setup Compiler打包为可执行安装程序，在static中包含了如何将后端注册成为电脑本地服务，卸载删除，备份本地数据库，覆盖安装还原数据库。bat文件的配置只适合本公司，具体详情，可以修改bat文件适应自己公司。

## 安装

``` bash
npm install electron-pack

yarn add electron-pack
```

## 使用

新建index.js

``` bash
const pack = require('electron-pack')

const config = {}

pack(config)
```

当然，你也可以直接下载使用。

``` 
npm i 

npm run start 
```

## 运行

``` bash
node index.js
```

## 参数

实际参数只有**config** (Object类型)一个参数，其中包含了以下参数

| 参数           |   类型  |                                      例子 |
|----------------|:-------:|------------------------------------------:|
| width          |  Number |                           1280 窗口最小宽度 |
| minWidth       |  Number |                              1280 窗口高度 |
| height         |  Number |                               960 窗口高度 |
| minHeight      |  Number |                            960 窗口最小高度 |
| frame          | Boolean |                            true 是否有边框 |
| center         | Boolean |                         true 窗口是否在中心 |
| minimizable    | Boolean |                      true 窗口是否可以最小化 |
| maximizable    | Boolean |                      true 窗口是否可以最大化 |
| url            |  String |           https://orangecj.cn 打包地址 |
| isWeb          | Boolean |                            true 是否是网站 |
| openDevTools   | Boolean |                      true 是否打开开发者工具 |

## 打包为安装程序

配合<strong style="color:#e68414">Inno Setup Compiler</strong>使用

## 版本更新

### 1.3.0

1. 修改了引用错误路径
2. 修改了使用说明
3. 添加了bat文件

