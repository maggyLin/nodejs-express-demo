
var express = require('express');
var app = express();
app.listen(8081);
// app.listen(8081, "127.0.0.1", function () {
//     console.log('Listening on port 8081');
// });

// express 不需要引入ejs,直接宣告需要使用的view engine
app.set('view engine', 'ejs');

// 前端模板預設指向views資料夾,修改 views資料夾位置
// app.set('views', 'new_views_position');


app.get('/', function (req, res) {
    res.send('holle world');
})

//使用 render( views指向頁面 , 傳入參數 )
app.get('/user', function (req, res) {
    res.render('user', {
        title: 'users list',
        users: ['Kai', 'aYen', 'Kyousuke']
    });
});