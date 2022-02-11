var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
var path = require('path');
var fs = require('fs');
const generateData = (urljson) => {
  // 使用Mock.mock方法来生成mock数据
  return Mock.mock(urljson)
}


/* GET home page. */
router.use('/', function (req, res, next) {
  // console.log(req.url[req.url.length - 1])
  if (req.path[req.path.length - 1] === '/') {
    res.json('url结尾不能为 / 而且 地址不能只写到端口号')
  } else {
    var filePath = path.resolve('./mock' + path.parse(req.path).dir);
    fs.readdir(filePath, function (err, files) {
      if (err) {
        console.warn(err)
        res.send('在 ' + err.path + ' 文件夹没有找到相关文件')
      } else {
        //遍历读取到的文件列表
        if (files.length === 0) {
          res.send('在 ./mock' + path.parse(req.path).dir + ' 文件夹没有找到对应文件')
        } else {
          try {
            let fileResult = files.find(function (filename) {
              return filename.slice(0, filename.lastIndexOf('.')) === path.parse(req.path).base
            });
            // console.log(fileResult)
            if (fileResult) {

              if (path.parse(fileResult).ext === '.json') {
                let urljson = require('../mock' + req.path + '.json')
                res.json(generateData(urljson))
              } else {
                let urljson = require('../mock' + req.path + '.js')
                res.send(urljson)
              }
            } else {
              res.send('在 ./mock' + path.parse(req.path).dir + ' 文件夹没有找到对应文件')
            }
          } catch (error) {
            console.log(error)
          }
        }

      }
    });
  }

});

module.exports = router;
