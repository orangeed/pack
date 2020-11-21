// const pack = require('electron-pack')
const pack = require('./src/main')

const config = {
    width: 1280, // 窗口的宽度
    minWidth: 1280, // 窗口最小宽度
    height: 960, // 窗口高度
    minHeight: 960, // 窗口最小高度
    frame: true, // 是否有边框
    center: true, // 窗口是否在中心
    minimizable: true, //窗口是否可以最小化
    maximizable: true, //窗口是否可以最大化
    url: './dist/index.html', // 打包地址
    isWeb: false, // 是否是网站
    openDevTools: true, // 是否打开开发者工具
}

pack(config)