// 仅在 Windows 上。
// const {
//   spawn
// } = require('child_process');
// const path = require("path");

// const {
//   exec
// } = require('child_process');
//   exec('d:/test.bat',(error, stdout, stderr) => {
//     if (error) {
//       console.error(`执行的错误: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });
// return;

// const pa = 'C:\\jixin\\resoures\\app.asar\\src'.split('resoures')
// const relativePath = pa[0];
// const shellPath = path.join(relativePath, "/static/rename.bat");
// console.log('shellPath', shellPath);
// const bat = spawn(shellPath);

// bat.stdout.on('data', (data) => {
//   console.log('data', data);
// });

// bat.stderr.on('data', (data) => {
//   console.error('error', data);
// });

// bat.on('exit', (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });
const path = require("path");
const fs = require("fs");
const util = require("util");
var originalFs = require('original-fs');

const path1 = 'C:\\jixin\\dowload\\app.asar'
console.log(

  originalFs.readFileSync(path1)
);
return;
fs.readFile(path1, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const a = util.inspect(data)
    a.node_modules = null;
    a.dist = null;
    console.log(typeof data);
    console.log('data', Object.keys(a));
    // console.log('data', JSON.parse(data)['package.json']);
    // JSON.parse(data.toString()).version = name
    // console.log('修改', data);
  }
})
return;
// const path1 = 'C:\\jixin\\dowload\\app.asar'
// const path1 = 'D:\\electron\\pack\\package.json'

// const package = require(`${path1}`)
console.log('package', package);
const dirPathO = path.join(__dirname).split('resources')
console.log('dirPathO', dirPathO);
const relativePath = dirPathO[0];

const packagesStr = util.inspect(package, {
  depth: null
})
console.log(packagesStr);
let path2 = relativePath + '/log.txt'
fs.appendFile(path2, `${packagesStr}`, (error) => {
  if (error) throw error
  console.log(`成功已经写入${path}中！`)
})