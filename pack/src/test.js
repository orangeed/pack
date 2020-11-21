// 仅在 Windows 上。
const {
  spawn
} = require('child_process');
const path = require("path");

const {
  exec
} = require('child_process');
//   exec('d:/test.bat',(error, stdout, stderr) => {
//     if (error) {
//       console.error(`执行的错误: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });
// return;

const pa = 'C:\\jixin\\resoures\\app.asar\\src'.split('resoures')
const relativePath = pa[0];
const shellPath = path.join(relativePath, "/static/rename.bat");
console.log('shellPath', shellPath);
const bat = spawn(shellPath);

bat.stdout.on('data', (data) => {
  console.log('data', data);
});

bat.stderr.on('data', (data) => {
  console.error('error', data);
});

bat.on('exit', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});