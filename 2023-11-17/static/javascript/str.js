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
// u - 유니코드 검색 ( %2b%11%ab^ac%15%a2 )
// y - sticky 문자열 내 특정 위치에서 검색을 진행

console.log( test.match(/cat/g)) ;
word = "banana \n apple \n member!!";
console.log( word.match( /^apple/gm ) );// ^apple : 문장이 apple로 시작하는지 검사

//정규 표현식 기호
/*
    영어 알파벳 : a-z , A-Z (범위검색)
    한글 : ㄱ-ㅎ , 가-힣 (범위검색)
    숫자 : 0-9 (범위검색)
    모든문자열 : . (숫자,한글,영어,특수기호,공백 전부해당) 단, 줄바뀌면안됨
    \d : 숫자
    \D : 숫자가 아닌것
    \w : 영숫자 문자 ( A-Za-z0-9)
    \W : 영숫자가 아닌것
    \s : space바로 만든 공백
    \S : space 공백 아닌것
    
    패던 검색 기준 
    /패턴/
    | - or (  \D | \S /)
    [] : or 처리 묶음 ( /[123]/ -> 1 | 2 | 3 ) /[ 다-아]/
    ^ : 특정문자열로 시작 (행의 시작점)
    ^문자열 : 특정문자열로 시작(행의 시작점)
    문자열$ : 특정문자열로 끝남 (행의 마지막)
    [^문자열] : 괄호한의 문자를 제외한 것 [^adfg]

    이메일 유효 검사 정규표현식
    ^[a-zA-z0-9+-\_.]+@[a-z A-z0-9]+\.[a-zA-z]+$
    
    ex) 영어숫자 _ abc_11@naver.com
    /^010-?([0-9{4}])-? ([0-9]{4}$)/
*/

word="나는 20살입니다. \n전화번호는 010-1234-1234 입니다.";
console.log("원본 :" + word);
console.log( word.replace(/\-/g,''));
console.log( word.replace(/\./g,'')  );
console.log( word.replace(/\s/g,'')  );
console.log( word.replace(/..살/g, '45살'));

//전화번호에서 1234-1234 부분을 xxxx-1234로 변경 

word= "전화번호는 1234-1234"
console.log( word.replace( /[0-9]{4/, "xxxx")) ;

var tmoney = "10,200원";
// var money = tmoney.replace(/\,/g,"").replace(원$/g,'');
var money = tmoney.replace(/[^0-9]/g,'');
console.log (money);

// ☆★중요
// 문자열 나누기 - split()
word = "이순신, 강감찬, 김유신, 장보고 , 최무선 ,장영실";
const name = word.split(",");
console.log(neme[3]);
word = "nice123@naver.com";
var id = word.split("@")[0]; 
console.log(id);

// 7. 문자열추출 - substring()
console.log( word.suvstring(0,7) ); //0번째부터 7번 이전까지 추출한다는내용
console.log( word.substring(4)  ); // 4번 부터 끝까지 추출
console.log(word.substring(0, word.indexOf("@") ) ) ;
var birth = "19971209"
// 생년월일중에서 몇월생인지 출력
console.log( birth.suvstring(4,6));

// 8 . 문자열 추출 2 -slice() : 음수값도 사용할 수 있다.
word="자바스크립트 너무 좋아!";
console.log (word.slice(2,7 ) );
console.log (word.slice(-3) );
console.log( word.slice(-3, -2)); //★음수를썻다면 음수로끝내야된다

var text = "강동욱 105,000-남기현 345,200-서종우 10,000원-송재영 4,343,290원";
// 문제 !!
// 남기현이 보유한 현금은 얼마인가 (정수로 출력)
// 강동욱이 보유한 현금에 서종우의 돈을 빼면 얼마인가??
// 송재영의 돈을 434,329원으로 변경하시오

let info = "이순신:군인34세,아산 -장보고:군인,41세,완도 - 김춘추:정치인,28세,경주;"
let deta = info.split("-");
//출력 - 이름 직업
var 이순신_name = data[0].substring(0, data[0].indexOf(":"));//date[0].split(":");
var 이순신_직업 = data[0].substring(data[0].indexOf(":")+1,data[0].indexOf(","));

console.log(이순신_name + " " + 이순신_직업);

//장보고의 나이는 몇인가 출력 - 나이만 출력하기 !!
data[1]. substring( data[1]. indexOf(",")+1, data[1].lastIndexOf(","));
console.log( parseInt(age)); // parseInt() - 앞쪽에있는 숫자만 정수로 변환