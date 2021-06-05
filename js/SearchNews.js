/*
function loadNews(string){
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
      console.log(this.responseText);
      document.getElementById("raw_data").innerHTML = this.responseText;
  }
  });
  // https://cors-anywhere.herokuapp.com/ 를 통해 프록시 서버를 사용해서 우회하여 Cors 문제 해결
  xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/news.json?query=" + string + "&display=3");
  xhr.setRequestHeader("X-Naver-Client-Id", "w6orn7AqPWmOPQXiBZyA");
  xhr.setRequestHeader("X-Naver-Client-Secret", "NxUskNkQ8Y");

  xhr.send();
}
*/

/*
function newsSearch(){
  // 네이버 검색 Open API 예제 - 뉴스 검색
  var express = require('express');
  var app = express();
  var client_id = 'w6orn7AqPWmOPQXiBZyA';
  var client_secret = 'NxUskNkQ8Y';
  app.get('/search/news', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI(req.query.query); // json 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id' : client_id, 'X-Naver-Client-Secret': client_secret}
      };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  });
  app.listen(12341, function () {
    console.log('http://127.0.0.1:12341/search/news?query=머니게임'); // 포트가 사용중인지 확인. 사용 중이면 에러생김
  });
  // http://127.0.0.1:3000/search/news?query=moneygame 로 들어가면 된다.
}
*/