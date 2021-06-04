'use strict'
const electron = require('electron')
// const path = require("path");
// const _axios = require('axios')
// const update = require('./dowload')
// const packages = require('../package.json')
// const fs = require('fs')
// const util = require("util")
// const config = require('./config');
// const log = require('electron-log');
// var originalFs = require('original-fs');

// const path1 = 'C:\\jixin\\dowload\\app.asar'
// console.log('***',
//   originalFs.readFileSync(path1, 'utf-8')
// );

// log.transports.file.resolvePath = (variables) => {
//   return path.join(config.project + '/log', 'electron.log');
// };
// console.log = log.log;

/**
 * @param {Object} config 
 * @example 
 * config = {
 *    width: 1280, // 窗口的宽度 number
 *    minWidth: 1280, // 窗口最小宽度 number
 *    height: 960, // 窗口高度 number
 *    minHeight: 960, // 窗口最小高度 number
 *    frame: true, // 是否有边框 boolean
 *    center: true, // 窗口是否在中心 boolean 
 *    minimizable: true, //窗口是否可以最小化 boolean
 *    maximizable: true, //窗口是否可以最大化 boolean
 *    url:'http://www.zhihu.com' // 打包地址 string
 *    isWeb: true,// 是否是网站 boolean
 *    openDevTools: true, // 是否打开开发者工具 boolean
 *    setFullScreen: true  //是否全屏
 */

const pack = (config) => {
  const {
    app,
    BrowserWindow,
    Menu,
    globalShortcut
    // dialog,
  } = electron
  // const dirPath = path.join(__dirname)
  // const dirPathO = path.join(__dirname).split('resources')
  // console.log('dirPathO', dirPathO);
  // const relativePath = dirPathO[0];

  let myWindow = null
  // 创建窗口
  const createWindow = () => {
    // 隐藏菜单栏
    Menu.setApplicationMenu(null)
    // 创建浏览器窗口
    const win = new BrowserWindow({
      // icon: './dist/login_logo.png', //窗口图标
      width: config.width,
      minWidth: config.minWidth,
      height: config.height,
      minHeight: config.minHeight,
      // resizable: config.resizable, //禁止改变主窗口尺寸
      // fullscreen: config.resizable,//全屏
      frame: config.frame, //有边框
      // transparent: config.transparent,//透明边框
      center: config.center, //窗口是否在中心
      minimizable: config.minimizable, //窗口是否可以最小化.
      maximizable: config.maximizable, //窗口是否可以最大化.
      // kiosk: config.kiosk, //使用kiosk模式。如果使用kiosk模式，应用程序将全屏显示，并且阻止用户离开应用
      webPreferences: {
        nodeIntegration: false, //是否在Web工作器中启用了Node集成
        webSecurity: false,
        // preload: __dirname + '/preload.js'
        // preload: path.join(app.getAppPath(), 'preload.js'),
      },
    })
    myWindow = win
    //窗口默认最大化
    win.maximize()
    win.show()
    // 窗口全屏
    win.setFullScreen(config.setFullScreen);
    //配置ESC键退出全屏
    globalShortcut.register('ESC', () => {
      win.setFullScreen(false);
    })

    // 并且为你的应用加载index.html
    if (config.isWeb) {
      win.loadURL(config.url)

    } else {
      win.loadFile(config.url)
    }
    console.log('version', process.versions.chrome);
    // 打开开发者工具
    if (config.openDevTools) {
      win.webContents.openDevTools()
    }
  }

  //检测是否是只打开了一个窗口程序
  const gotTheLock = app.requestSingleInstanceLock()
  if (!gotTheLock) {
    app.quit()
  } else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      // 当运行第二个实例时,将会聚焦到myWindow这个窗口
      if (myWindow) {
        if (myWindow.isMinimized()) myWindow.restore()
        myWindow.focus()
        myWindow.show()
      }
    })

    // 创建 myWindow, 加载应用的其余部分, etc...
    app.on('ready', () => {})
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // 部分 API 在 ready 事件触发后才能使用。
    app.whenReady().then(createWindow)

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
      // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
      // 否则绝大部分应用及其菜单栏会保持激活。
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      // 在macOS上，当单击dock图标并且没有其他窗口打开时，
      // 通常在应用程序中重新创建一个窗口。
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  }


  // 获取版本号
  // const versionPath = relativePath + '/version.txt'
  // const logoPath = relativePath + '/log.txt'

  // fs.readFile(versionPath, 'utf8', (err, data) => {
  //   if (!err) {
  //     console.log('data', data.toString());
  //     up(data.toString())
  //   } else {
  //     console.log(err);
  //     const localVersion = app.getVersion()
  //     fs.writeFile(versionPath, localVersion, err => {
  //       if (err) {
  //         const error = util.inspect(err, {
  //           depth: null
  //         })
  //         fs.appendFile(path, `错误信息：${error}`, (err) => {
  //           if (err) throw err
  //           console.log(`错误信息已经写入${path}中！`)
  //         })
  //       } else {
  //         console.log('Version save success!');
  //       }
  //     })
  //   }
  // })
  // // 热更新检查
  // const up = (localVersion) => {
  //   _axios({
  //     url: 'http://183.134.197.66:13010/zjg_3s/version',
  //     method: 'get',
  //     params: {
  //       code: '1',
  //     },
  //   }).then(res => {
  //     console.log('res', res.data.errorCode);
  //     // const path = relativePath + '/log.txt'
  //     const resStr = util.inspect(res.data, {
  //       depth: null
  //     })
  //     const packagesStr = util.inspect(packages, {
  //       depth: null
  //     })
  //     fs.appendFile(logoPath, `${resStr},${packagesStr}*****${dirPath},${localVersion}`, (error) => {
  //       if (error) throw error
  //       console.log(`成功已经写入${path}中！`)
  //     })
  //     if (res.data.errorCode == 0) {
  //       console.log('localVersion', localVersion);
  //       const onlineVersion = res.data.data.name
  //       console.log('onlineVersion', onlineVersion);

  //       fs.appendFile(logoPath, `下载更新！`, (error) => {
  //         if (error) throw error
  //         console.log(`成功已经写入${logoPath}中！`)
  //       })
  //       if (localVersion < onlineVersion) {

  //         const dialogOpts = {
  //           type: 'info',
  //           buttons: ['立即更新', '稍后更新'],
  //           title: '更新提醒',
  //           message: `您有新的更新!`,
  //           // detail: `内容如下：` + `${dirPathO},${packages},${localVersion},${onlineVersion}`
  //           detail: `内容如下：` + `${res.data.data.attach}`
  //         }

  //         dialog.showMessageBox(dialogOpts).then((returnValue) => {
  //           console.log('returnValue', returnValue);
  //           if (returnValue.response === 0) {

  //             update(res.data.data.httpPath)
  //           }
  //         })
  //       }
  //     }
  //   })
  // }


  // In this file you can include the rest of your app's specific main process
  // code. 也可以拆分成几个文件，然后用 require 导入。
}

module.exports = pack