const express = require('express'); // 웹 서버 사용
const cors = require('cors');
var bodyParser = require('body-parser');
const fs = require('fs'); // 파일 로드 사용
// var XMLHttpRequest = require('xhr2'); // XMLHttpRequest 잘 동작하지 않을 경우 npm install xhr2 후 xhr2를 내장

const corsOption = {
    origin: 'localhost:8080',
    credentials: true,
};

var app = express();
var port = 8080;

app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});

app.use(express.static(__dirname)); // 현재 index.js가 있는 디렉토리로 지정. -> 상대 경로 동작 가능.
console.log(__dirname);


app.get('/', function(req, res){
    fs.readFile('home.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});
