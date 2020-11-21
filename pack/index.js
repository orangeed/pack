// const pack = require('electron-pack')
const pack = require('./main')

const config = {
    width: 1280, // 窗口的宽度
    minWidth: 1280, // 窗口最小宽度
    height: 960, // 窗口高度
    minHeight: 960, // 窗口最小高度
    frame: true, // 是否有边框
    center: true, // 窗口是否在中心
    minimizable: true, //窗口是否可以最小化
    maximizable: true, //窗口是否可以最大化
    url: 'https://music.migu.cn/v3', // 打包地址
    isWeb: true, // 是否是网站
    openDevTools: false, // 是否打开开发者工具
}

pack(config)