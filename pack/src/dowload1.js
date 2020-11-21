//文件下载
const fs = require('fs')
const path = require("path");
const axios = require('axios')
const fsPromises = require('fs').promises
const package = require('../package.json')
const {
    exec
} = require('child_process');


// 获取真实的绝对路径
const dirPathO = path.join(__dirname)
console.log('dirPathO', dirPathO);
const pa = 'C:\\jixin\\resoures\\app.asar\\src'.split('resoures')
const relativePath = pa[0];
console.log('**', pa);
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
    // let reFileName = ''
    // if (suffix == 'asar') {
    //     reFileName = 'resources/'
    // } else {
    //     reFileName = 'static/'
    // }
    // fs.access(relativePath + 'dowload/' + newName + '.' + suffix,err=>{
    //     if (err) {
    //         console.log('There have a some file');
    //     }else{

    //     }
    // })
    fs.rename(relativePath + 'dowload/' + name + '.' + suffix, relativePath + 'dowload/' + newName + '.' + suffix, err => {
        console.log('error', err);
        if (err) {
            if (num <= 1) {
                console.log('rename again!');
                reName(name, newName, suffix)
            } else {
                console.log('rename failed!', err);
            }
        } else {
            console.log('rename success!');
            reviseVersion(name)
        }
        // copyFile('./src/dowload/' + name + '.' + suffix, './src/jixin/' + name + '.' + suffix, name)
    })
}

// 移动文件
const copyFile = (copiedPath, resultPath, name, newName, suffix) => {
    fsPromises.copyFile(copiedPath, resultPath)
        .then(() => {
            console.log('copyFile success!');
            reName(name, newName, suffix)
            // reviseVersion(name, resultPath)
        }).catch((err) => {
            console.log('copyFile failed!');
            console.log(err);
        });
}

// 修改package的version号码
const reviseVersion = (name) => {
    package.version = name
    console.log('version change success!');
    console.log('package', package);
    openProgram()
}

// 打开指定文件程序
const openProgram = () => {
    const path = relativePath + '/jixin.exe'
    exec(path, (err, data)    => {
        if (err) {
            console.error('exe open failed', err);
            return;
        }
        console.log('exe open success', data.toString());
    });
}

// 下载文件
const dowloadFile = async (url) => {
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
            let w, newName;
            w = fs.createWriteStream(relativePath + 'dowload/' + name)

            res.data.pipe(w)
            return new Promise((resolve, reject) => {
                w.on('finish', () => {
                    console.log('This file is over end!');
                    if (suffix == 'asar') {
                        newName = 'app'

                        // 复制文件
                        // copyFile(relativePath + 'dowload/' + name, relativePath + 'resources/' + name, name, newName, suffix)

                        // copyFile(relativePath + 'dowload/' + newName + '.' + suffix, relativePath + 'resources/' + newName + '.' + suffix, name)
                        // 重命名下载的文件
                        reName(name, newName, suffix)
                        // w = fs.createWriteStream(relativePath + 'resources/' + name + '.' + suffix)
                    } else {
                        newName = 'zjg_2d'

                        // 复制文件
                        // copyFile(relativePath + 'dowload/' + name, relativePath + 'static/' + name, name, newName, suffix)

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