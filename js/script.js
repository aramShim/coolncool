// 공통 파일 로드 함수
function includeHTML(elementId, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${file}:`, error));
}

// 헤더와 푸터 삽입
// includeHTML("header", "header.html");
includeHTML("footer", "footer.html");
