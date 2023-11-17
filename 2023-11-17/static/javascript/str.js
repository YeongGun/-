// 문자열
// 자바스크립트에서 문자열은 String 객체 라는것으로 저장이되고
// 사용된다. String객체에는 다양한 문자열을 처리하기위한 메서드가 있다.

// 1. 문장열의 문자 갯수가 몇개냐??

var word = "member";
var len = word.length; /*문자열에몇글자*/
console.log(`문자열 갯수 : ${len}`);

// 2. 문자열에서 한글자만 가져오기 - charAt()

var at = word.charAt(3);
console.log( at);

// 3. 문자열에서 특정문자또는 문자열이 있냐? 어디에있냐? - indexOf()
word = "i like html like css";
var idx = word.indexOf("love"); /*맨앞에잇는()안의용어 를찾아준다 */
console.log( idx );
if ( word.indexOf("love") == -1 ){ //문자열에 검색문자또는 문자열이 없다면 -1
    console.log("love는 없다");
}
// 4. indexOf는 문자열의 첫번째 부터 검색을 하기때문에 
// 뒤쪽에 있는 문자나 문자열이 결과로 나오지 않을수 있다.
// lastIndexOf() - 문자열의 뒤쪽에서 검색

// 5. replace - 문자여렝서 특정 문자열을 다른 문자열로 변경
word = "i like css like like";
word = word.replace(" like", "love");
word.replace("like", "love");
console.log( word2 );

// 정규 표현식
// g(global) : 문자열내의 모든 패턴 검색
// i(ignore case) : 대소문자 구별 없이 검색
word = "i like css like like";
word2 = word.replace(/like/gi, "love"); /* gi는 전체를의미한다 */
console.log( word2);

// 정규 표현식의 기본 구조 - /regexr/i (패턴/플래그 , / 값/ 표현식 ( /like/g )
// /.[A-Z]/g - 1문자와 대문자의 조합을 문자열 전체에서 검색
// replace( /\ -/g, '') - 특정 문자 제거 ( - )
// const regex = /good/; // good이라는 단어가 있는지 검색 하기 위해 표현식 생성
var test = "banana apple cat good nice good cat apple cat good";

console.log ( regex.test(test)); // .text() - 문자열에 패턴이 존재 하는지 알려준다.(true, false)
console.log ( test.match(regex) );// .match() - 패턴에 매칭되는 문자열들을 가지고온다.

// i - ignore case 대소문자 구별없이 검색
// g - global 문자열 내 모든 패턴 검색
// m - multi line 문자열의 행이 바뀌더라 검색을 계속한다.
// s - 모든 문자 검색 (특수문자 포함 ) : 특수문자 ( \n, \r, \t,\p, \a 등등)
// u - 유니코드 검색
// y - sticky 문자열 내 특정 위치에서 검색을 진행 