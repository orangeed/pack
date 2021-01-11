const log = require('electron-log');
const path = require('path');
const fs = require('fs');
const dayjs = require('dayjs');
const config = require('./config');
window.addEventListener('load', () => {
  // const url = window.electronConfigUrl ? window.electronConfigUrl : { log: 'C:/tool/log' };
  const url = config;
  log.transports.file.resolvePath = (variables, LogMessage) => {
    return path.join(url.log, `web.${LogMessage.level}.log`);
  };
  log.transports.file.archiveLog = (file) => {
    file = file.toString();
    const info = path.parse(file);
    const fileList = fs.readdirSync(url.log).filter((ele) => ele.includes(info.name));
    fileList.sort().reverse();
    const deleteFileList = fileList.slice('5');
    for (let i = 0; i < deleteFileList.length; i++) {
      const element = deleteFileList[i];
      fs.unlinkSync(`${url.log}/${element}`);
    }
    try {
      fs.renameSync(file, path.join(info.dir, info.name + '.' + dayjs().format('YYYY-MM-DD_HH+mm+ss') + info.ext));
    } catch (e) {
      console.warn('Could not rotate log', e);
    }
  };
  window.console = Object.assign(window.console, log.functions);
});

