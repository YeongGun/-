
$(function(){
    $("#size").attr("disabled",true);
    $("#color").attr("disabled",true);
    
    $("#make").on("click", open());
        openPage("make");
    
    $("#size").on("click", open());
        openPage("size");


    $("color").on("click", function(){
        openPage("color");
    })
});

function open( page ){
    
    var sheight = screen.availHeight;
    var swidth = screen.availWidth;
    // 새페이지 - window.open( 주소 ,대상, 옵션)
    // 대상(target) - _black , _self , _parent
    child= window.open( page+".html","width=500,height=500, top=200, left=100")
    "width=500, height=300, top="+(sheight/2-150)+",left="+(swidth/2-250);
}
    // 브라우저 에는 Dom 이라는 구조를 사용하여 페이지를 표시한다.
    // document object model - html 문서를 객체화 
    // html 문서의 내용이 브라우저 화면에 표시 되는 과정 
    // 파싱 - 렌더링 - 표시  