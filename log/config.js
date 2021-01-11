const package = require('./package.json');
const fs = require('fs');
console.log(package);
console.log('process.env', process.env);
const NODE_PROJECT = process.env.NODE_PROJECT ? process.env.NODE_PROJECT : 'tool';
// const project = {
//   tool: {
//     project: 'C:/tool',
//     icon: 'toolcabinet.ico',
//     log: 'C:/tool/log',
//   },
//   zhongtong: {
//     project: 'C:/zhongtong',
//     icon: 'zhongtong.ico',
//     log: 'C:/zhongtong/log',
//   },
//   linux: {
//     project: '/home/jx',
//     icon: 'zhongtong.ico',
//     log: '/home/jx/log',
//   }
// };
package.config.forge.packagerConfig.icon = project[NODE_PROJECT].icon;
fs.writeFileSync('package.json', JSON.stringify(package, null, 2));
// 相对地址
module.exports = {
  project: 'C:/tool',
  log: 'C:/tool/log',
}