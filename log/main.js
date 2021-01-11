const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, Menu } = electron;
const log = require('electron-log');
const fs = require('fs');
const config = require('./config');
global.url = config;
// global.url = {
//   // project: 'C:/tool',
//   // icon: 'toolcabinet.ico',
//   project: 'C:/zhongtong',
//   icon: 'zhongtong.ico',
// };
log.transports.file.resolvePath = (variables) => {
  return path.join(global.url.project + '/log', 'electron.log');
};
console.log = log.log;
const createWindow = async () => {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
    },
    icon: global.url.icon,
  });

  // win.loadFile('C:/zhongtong/dist/index.html');
  // win.loadFile('/home/jx/dist/index.html');
  win.loadFile(`${global.url.project}/dist/index.html`);
  // win.loadURL('http://localhost:8080');

  // 打开开发者工具
  win.webContents.openDevTools();
};

app
  .whenReady()
  .then(createWindow)
  .catch((error) => console.error(error));
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    console.log('electron程序关闭');
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    console.log('electron程序启动');
    createWindow();
  }
});
