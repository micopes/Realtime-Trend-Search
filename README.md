# Realtime-Trend-Search


## 웹 구성


### 통합 검색어 트렌드

![image](https://user-images.githubusercontent.com/43158502/138586594-156f5f90-7a41-4b62-bd7e-8615f526943b.png)

- 시작 날짜 설정
- 마감 날짜 설정
- 시간 단위 설정
  - `year`, `month`, `week`, `day`
- 주제어 설정
  - 주제어에 해당하는 검색어 묶음 설정
> 이후 `검색`을 누르면, 해당하는 키워드가 언제 가장 트렌드였는지를 기준으로 시간 단위에 맞게 0 ~ 100까지의 값을 출력해준다.

### 네이버 뉴스 검색

![image](https://user-images.githubusercontent.com/43158502/138586944-5d4b7aef-d0db-4157-b72d-d8df4d295ec4.png)

- 마지막 빌드 날짜
- 뉴스의 전체 개수
- 제목
- 링크
- 게시 날짜
- 제목

> 위의 사항들을 확인할 수 있다.

### 네이버 블로그 검색

![image](https://user-images.githubusercontent.com/43158502/138587018-ab5ba26f-7682-4b3f-93c8-2bd5e5be9161.png)

- 제목
- 링크
- 설명
- 블로그 이름
- 블로그 링크
- 게시 날짜

> 위의 사항들을 확인할 수 있다.

## APIs
- [통합 검색어 트렌드](https://developers.naver.com/docs/serviceapi/datalab/search/search.md#%EA%B0%9C%EC%9A%94)
- [네이버 뉴스 검색](https://developers.naver.com/docs/serviceapi/search/news/news.md#%EB%89%B4%EC%8A%A4)
- [네이버 블로그 검색](https://developers.naver.com/docs/serviceapi/search/blog/blog.md#%EB%B8%94%EB%A1%9C%EA%B7%B8)

