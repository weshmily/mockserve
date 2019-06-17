# mockserve

> 用于前后分离时模拟数据的mockserve系统，前后端并行开发的利器,解决了mockjs直接引入无法在Network里无法调试的问题

### 下载地址: 
```
https://github.com/weshmily/mockserve
```
### 安装依赖包
```
npm install
```
### 启动项目
```
npm start
```
### 访问地址
```
http://localhost:3000/mockserve
```
### 使用说明
例如:

 - 如果你想访问接口:http://localhost:3000/mockserve 那么就在mockserve/mock目录下新建mockserve.js文件(或者mockserve.json)编写你的接口代码
 - 如果你想访问接口:http://localhost:3000/mockserve/a 那么就在mockserve/mock/mockserve目录下新建a.js文件(或者a.json)编写你的接口代码
 - 代码可以是json文件还可是js文件(两个文件都有默认加载js文件)
 - 创建的json文件代码会自动加载到Mock.mock()里面,这样有一个弊端就是只能加载数据模板不能编写数据占位符
 - 创建的js文件是一个完整mock代码片段,可以完整的编写mock全部功能


## 作者
#### 作者: weshmily科技站长
#### 官网: 百度搜索([weshmily科技](http://weareshmily.top/ "weshmily科技"))
#### CSDN博客:http://blog.csdn.net/qq_27118895
#### GitHub: https://github.com/weshmily
#### 公众号:搜索"weshmilyqd"

