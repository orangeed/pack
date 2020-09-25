const {
    pack
} = require('./main.js')

const config = {
    width: 1280, // 窗口的宽度
    minWidth: 1280, // 窗口最小宽度
    height: 960, // 窗口高度
    minHeight: 960, // 窗口最小高度
    frame: true, // 是否有边框
    center: true, // 窗口是否在中心
    minimizable: true, //窗口是否可以最小化
    maximizable: true, //窗口是否可以最大化
    webPreferences: {
        nodeIntegration: true, //是否在Web工作器中启用了Node集成
        webSecurity: false
    },
    url: 'http://www.zhihu.com', // 打包地址
    isWeb: true, // 是否是网站
    openDevTools: true, // 是否打开开发者工具
}

pack(config)