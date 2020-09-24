const {
  app,
  BrowserWindow,
  Menu
} = require('electron')
let myWindow = null

function createWindow() {
  // 隐藏菜单栏
  Menu.setApplicationMenu(null)
  // 创建浏览器窗口
  const win = new BrowserWindow({
    // icon: './dist/login_logo.png', //窗口图标
    width: 1280,
    minWidth: 1280,
    height: 960,
    minHeight: 960,
    // resizable: false, //禁止改变主窗口尺寸
    // fullscreen: true,//全屏
    frame: true, //有边框
    // transparent: true,//透明边框
    center: true, //窗口是否在中心
    minimizable: true, //窗口是否可以最小化.
    maximizable: true, //窗口是否可以最大化.
    // kiosk: false, //使用kiosk模式。如果使用kiosk模式，应用程序将全屏显示，并且阻止用户离开应用
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })
  myWindow = win
  //窗口默认最大化
  win.maximize()
  win.show()

  // 并且为你的应用加载index.html
  win.loadFile('./test/index.html')

  // win.loadFile('./dist/index.html')
  // win.loadURL('http://localhost:9527/')

  // 打开开发者工具
  // win.webContents.openDevTools()
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

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。