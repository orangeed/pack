const fs = require('fs')
const path = require('path')

const copy = (from, to) => {
    const fromPath = path.resolve(from)
    const toPath = path.resolve(to)
    //定义一个文件夹数组
    let fileArr = []
    //判断输出的文件夹是否存在，不存在的话，新建一个文件夹
    fs.access(toPath, (err) => {
        if (err) {
            //新建文件夹
            fs.mkdirSync(toPath)
        }
    })
    //读取文件，结果是数组的形式
    fs.readdir(fromPath, (err, paths) => {
        //将文件夹的名称push到数组中
        fileArr = paths
        if (fileArr.includes('log')) {
            fileArr.remove('log')
        }
        if (err) {
            console.log(err)
            return
        }
        //遍历读取的文件
        paths.forEach((item) => {
            //重新制定路径
            const newFromPath = fromPath + '/' + item
            const newToPath = path.resolve(toPath + '/' + item)
            //获取文件信息，第一个参数为路劲，第二个参数为回调函数
            fs.stat(newFromPath, (err, stat) => {
                if (err) return
                //判断是否是文件
                if (stat.isFile()) {
                    copyFile(newFromPath, newToPath)
                    // console.log(newToPath)
                }
                //判断是否是目录
                if (stat.isDirectory()) {
                    copy(newFromPath, newToPath)
                }
            })
        })
    })

}

const copyFile = (from, to) => {
    fs.copyFileSync(from, to, (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

copy('./app/client-win32-x64', './app/backup')