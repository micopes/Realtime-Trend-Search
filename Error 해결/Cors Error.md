## 에러) CORS 에러
`from origin 'null' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

> 해결 방법)
> 인라인 바벨 및 반응 스크립트를 사용하는 동안 npm 패키지를 설치하지 않으려면 방법은 다음과 같습니다.
- 옵션 1 (vscode 사용) : vscode
에 "liveserver"확장이 있습니다. vscode에서 HTML을 열고 편집기에서 liverserver를 시작하십시오.
- 옵션 2 (크롬 용 웹 서버) 서버를
시작할 수있는 크롬 브라우저 용 확장입니다.

-> 옵션 1 VScode 확장 - LiveServer 설치

> 해결되지 않음

-> 옵션 2 Allow CORS: Access-Control-Allow-Origin 확장 프로그램 이용

> 해결되지 않음

> <script type=module> 은 로컬에서 실행시 자바스크립트 모듈 보안 요구로 인해 CORS 에러가 발생한다
> 로컬시스템에서 로컬 파일 리소스를 요청할 때는 origin(출처)이 null로 넘어가기 때문에 CORS에러가 발생한다.
> 해당 디렉토리에서 실행하는 것이 필요. 

`$ node index.js`를 수행
받아올 곳에서는 
- https://cors-anywhere.herokuapp.com/를 앞에 붙여서 프록시 서버를 우회
- https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/news.json?query=moneygame&display=10

> Cors는 해결되었으나 403 Error 발생.

> POSTMAN에서 POST방식은
> body의 raw(JSON)에다가 그대로 형식 전달해주면 된다.
