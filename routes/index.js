var express = require('express');
var router = express.Router();
var Mock = require('mockjs')

const generateData = () => {
  // 使用Mock.mock方法来生成mock数据
  return Mock.mock({
    "code": 200,
    "data": [
      {
        "id": "123",
        "title": "123",
        "author": "123",
        "volume": "123",
        "createAt": "123"
      }
    ]
  })
}


/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(generateData())
});

module.exports = router;
