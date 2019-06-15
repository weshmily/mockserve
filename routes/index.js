var express = require('express');
var router = express.Router();
var Mock = require('mockjs')

const generateData = (urljson) => {
  // 使用Mock.mock方法来生成mock数据
  return Mock.mock(urljson)
}


/* GET home page. */
router.use('/', function (req, res, next) {
  let urljson = require('../mock' + req.url)
  res.json(generateData(urljson))
});

module.exports = router;
