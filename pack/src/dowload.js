//文件下载
const fs = require('fs')
const path = require("path");
const axios = require('axios')
const fsPromises = require('fs').promises
// const package = require('../package.json')
const {
    exec,
    spawn
} = require('child_process');
const electron = require('electron')

const {
    app,
} = electron
var util = require("util")


// 获取真实的绝对路径
const dirPathO = path.join(__dirname).split('resources')
console.log('dirPathO', dirPathO);
const relativePath = dirPathO[0];

console.log('relativePath', relativePath);



// 获取一个绝对路径的文件夹
const dirPath = path.join(relativePath, "/dowload");
console.log('dirPath', dirPath);

// 热更新
const update = (url) => {
    fs.access(dirPath, (err) => {
        console.log('err', err);
        if (err) { //如果文件不存在，就创建这个文件
            fs.mkdir(dirPath, (err) => {
                console.log(err);
                if (!err) {
                    console.log('dowload file create success!');
                    dowloadFile(url)
                }
            });
        } else {
            //如果这个文件已经存在
            dowloadFile(url)
        }
    })
}

let num = 0
    // 文件重命名
const reName = (name, newName, suffix) => {
    num++
    console.log('begin to rename!');
<<<<<<< HEAD
    fs.rename(relativePath + 'dowload/' + name, relativePath + 'dowload/' + newName + '.' + suffix, err => {
            console.log('error', err);
            if (err) {
                if (num <= 1) {
                    console.log('rename again!');
                    reName(name, newName, suffix)
                } else {
                    console.log('rename failed!', err);
                }
=======
    fs.rename(relativePath + 'dowload\\' + name, relativePath + 'dowload\\' + newName + '.' + suffix, err => {
        console.log('error', err);

        if (err) {
            if (num <= 1) {
                console.log('rename again!');
                reName(name, newName, suffix)
>>>>>>> cb53d7f80b222ae3c6c47ad5cc4f5b1a5a348f08
            } else {
                console.log('rename success!');
                reviseVersion(name, newName, suffix)
            }
        })
        // let reFileName = ''
        // if (suffix == 'asar') {
        //     reFileName = 'resources/'
        // } else {
        //     reFileName = 'static/'
        // }
        // fs.rename(relativePath + reFileName + name, relativePath + reFileName + newName + '.' + suffix, err => {
        //     console.log('error', err);
        //     if (err) {
        //         if (num <= 1) {
        //             console.log('rename again!');
        //             reName(name, newName, suffix)
        //         } else {
        //             console.log('rename failed!', err);
        //         }
        //     } else {
        //         console.log('rename success!');
        //         reviseVersion(name)
        //     }
        // })
}

// 调用脚本复制
const shellReName = (name, newName, suffix) => {
    let bat, shellPath
    if (suffix == 'asar') {
        shellPath = path.join(relativePath, "/copy.bat");
        console.log('shellPath', shellPath);
    } else {
        shellPath = path.join(relativePath, "/copyzjg.bat");
        console.log('shellPath', shellPath);
    }
    bat = spawn(shellPath);

    bat.stdout.on('data', (data) => {
        app.quit()
        console.log('data', data);
        // copyFile(newName, suffix)
    });

    bat.stderr.on('data', (data) => {
        console.error('error', data);
    });

    bat.on('exit', (code) => {
        console.log(`子进程退出，退出码 ${code}`);
    });
}

// 移动文件
const copyFile = (newName, suffix) => {
    const copiedPath = relativePath + 'dowload/' + newName + '.' + suffix;
    const resultPath = relativePath + 'resources/' + newName + '.' + suffix;
    fsPromises.copyFile(copiedPath, resultPath)
        .then(() => {
            console.log('copyFile success!');
            openProgram()
                // reviseVersion(name)
                // reName(name, newName, suffix)
                // shellReName(copiedPath, resultPath, name, newName, suffix)
        }).catch((err) => {
            console.log('copyFile failed!');
            console.log(err);
        });
}

// let filePath = dirPath + '\\app.asar\\package.json'
// const package = require(`${filePath}`)
// 修改package的version号码
const reviseVersion = (name, newName, suffix) => {

    let path = relativePath + '/log.txt'

    const versionPath = relativePath + '/version.txt'
    fs.writeFile(versionPath, name, err => {
        if (err) {
            const error = util.inspect(err, {
                depth: null
            })
            fs.appendFile(path, `错误信息：${error}`, (err) => {
                if (err) throw err
                console.log(`错误信息已经写入${path}中！`)
            })
        } else {
            console.log('Version save success!');
        }
    })
    shellReName(name, newName, suffix)








    // let arr = {
    //     ...name
    // }
    // let val = Object.values(arr)
    // let str = ''
    // val.forEach(v => {
    //     str += v
    // })
    // console.log('str', str);
    // package.version = str
    // const packagesStr = util.inspect(package, {
    //     depth: null
    // })

    // console.log('filePath',filePath);
    // fs.readFile(filePath, 'utf8', (err, data) => {
    //     if (!err) {
    //         console.log('data', data.toString());
    //         JSON.parse(data.toString()).version = name
    //         console.log('修改', data);
    //         fs.writeFile(filePath, data, (err) => {
    //             if (!err) {
    //                 const packagesStr = util.inspect(data, {
    //                     depth: null
    //                 })
    //                 fs.appendFile(path, `修改了版本号：name,${name},${packagesStr}`, (error) => {
    //                     if (error) throw error
    //                     console.log(`成功已经写入${path}中！`)
    //                 })
    //             }
    //         });
    //     }
    // })
    // console.log('version change success!');
    // fs.appendFile(path, `修改了版本号：name,${name},文件地址：${filePath},${packagesStr}`, (error) => {
    //     if (error) throw error
    //     console.log(`成功已经写入${path}中！`)
    // })
}

// 打开指定文件程序
const openProgram = () => {
    const path = relativePath + '/jixin.exe'
    exec(path, (err, data) => {
        if (err) {
            console.error('exe open failed', err);
            return;
        }
        console.log('exe open success', data.toString());
    });
}

// 下载文件
const dowloadFile = (url) => {
    console.log('url', url);
    // 获取文件名称
    // const name = url.split('/').pop().split('_')[0] + '.' + url.split('/').pop().split('_').pop().split('.').pop()
    const name = url.split('/').pop().split('_')[0]
    console.log(name);
    // 获取文件后缀
    const suffix = url.split('/').pop().split('_').pop().split('.').pop()
    console.log('suffix', suffix);
    // const filePath = path.resolve('./src/dowload', name)
    // console.log('filePath', filePath);
    // return
    axios({
            method: 'get',
            url,
            timeout: 10 * 60 * 1000,
            maxContentLength: Infinity,
            responseType: 'stream',
        })
        .then(res => {
            // console.log(res.data);
            console.log('relativePath', relativePath);
            let w, newName;
            w = fs.createWriteStream(relativePath + '\\dowload\\' + name)

            res.data.pipe(w)
            return new Promise((resolve, reject) => {
                w.on('finish', () => {
                    console.log('This file is over end!');
                    if (suffix == 'asar') {
                        newName = 'app'
<<<<<<< HEAD
                            // 复制文件
                            // copyFile(relativePath + 'dowload/' + name, relativePath + 'resources/' + name, name, newName, suffix)
                            // 调用脚本重命名
                            // shellReName(relativePath + 'dowload/' + name, relativePath + 'resources/' + name, name, newName, suffix)
                            // copyFile(relativePath + 'dowload/' + newName + '.' + suffix, relativePath + 'resources/' + newName + '.' + suffix, name)
                            // 重命名下载的文件
=======

                        // 复制文件
                        // copyFile(relativePath + 'dowload/' + name, relativePath + 'resources/' + name, name, newName, suffix)
                        // 调用脚本重命名
                        // shellReName(relativePath + 'dowload/' + name, relativePath + 'resources/' + name, name, newName, suffix)
                        // copyFile(relativePath + 'dowload/' + newName + '.' + suffix, relativePath + 'resources/' + newName + '.' + suffix, name)
                        // 重命名下载的文件
>>>>>>> cb53d7f80b222ae3c6c47ad5cc4f5b1a5a348f08
                        reName(name, newName, suffix)
                            // w = fs.createWriteStream(relativePath + 'resources/' + name + '.' + suffix)
                    } else {
                        newName = 'zjg_2d'

                        // 复制文件
                        // copyFile(relativePath + 'dowload/' + name, relativePath + 'static/' + name, name, newName, suffix)
                        // 调用脚本重命名
                        // shellReName(relativePath + 'dowload/' + name, relativePath + 'resources/' + name, name, newName, suffix)
                        // copyFile(relativePath + 'dowload/' + newName + '.' + suffix, relativePath + 'static/' + newName + '.' + suffix, name)
                        // 重命名下载的文件
                        reName(name, newName, suffix)
                            // w = fs.createWriteStream(relativePath + 'static/' + name + '.' + suffix)
                    }
                    resolve()
                })
                w.on('error', (err) => {
                    console.log('error', err);
                    reject()
                })
            })
        })
}


module.exports = update