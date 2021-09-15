var express = require('express');
var app = express();
app.listen(8081, "127.0.0.1");

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/new', function (req, res) {
   res.send('new page');
})

app.post('/doing', function (req, res) {
   res.send('doing');
})

//動態路由,獲取參數
app.get('/aritcle/:no', function (req, res) {

   //使用 req.params.參數名稱 抓取
   res.send(req.params.no);

})

app.get('/who/:name?/:title?', function (req, res) {
   var name = req.params.name;
   var title = req.params.title;
   res.send('<p>名稱: ' + name + '<br>值稱: ' + title + '</p>');
});

//get 獲取參數 getTest?no=***
app.get('/getTest', function (req, res) {

   //使用 req.query.參數名稱 抓取
   res.send(req.query.no);
})