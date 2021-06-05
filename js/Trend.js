/*
function loadTrend(startDate, endDate, timeUnit, groupName, keyword1, keyword2, keyword3, keyword4){
    var data = JSON.stringify({
    "startDate": startDate,
    "endDate": endDate,
    "timeUnit": timeUnit,
    "keywordGroups": [
        {
        "groupName": groupName,
        "keywords": [
            keyword1,
            keyword2,
            keyword3,
            keyword4
        ]
        }
    ]
    });

    // var XMLHttpRequest = require('xhr2'); // XMLHttpRequest 잘 동작하지 않을 경우 npm install xhr2 후 xhr2를 내장
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
        document.getElementById("raw_data").innerHTML = this.responseText;
    }
    });

    xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/datalab/search");
    xhr.setRequestHeader("X-Naver-Client-Id", "j3fTWebjEYH3yJ6nzVN3");
    xhr.setRequestHeader("X-Naver-Client-Secret", "xZsvuH3i7x");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}
*/

/*

// 트렌드 검색 node.js
// POST : client -> Web server. http 헤더를 통해 서버로 전송되며 서버 끝 또는 클라이언트에서 웹서버(ex) 프록시 서버) 사이에서만 사용가능하다.
// Javascript와 같은 클라이언트 측 스크립트에서는 사용 불가.
var request = require('request');
var client_id = 'j3fTWebjEYH3yJ6nzVN3';
var client_secret = 'xZsvuH3i7x';
var api_url = 'https://openapi.naver.com/v1/datalab/search';
var request_body = {
    "startDate": "2021-04-01",
    "endDate": "2021-06-01",
    "timeUnit": "week",
    "keywordGroups": [
        {
            "groupName": "머니게임",
            "keywords": [
                "머니게임",
                "파이",
                "전기",
                "공혁준",
            ]
        }
    ]
};

request.post({
    url: api_url,
    body: JSON.stringify(request_body),
    headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret,
        'Content-Type': 'application/json'
    }
},
function (error, response, body) {
    console.log(response.statusCode);
    console.log(body);
});
*/