let image = ["딸기.jfif","바나나.jfif","복숭아.jfif","아보카도.jfif","오렌지.jfif","체리.jfif","파인애플.jfif","포도.jfif"];

let board = new Array(); // 게임판 

let box=0;
let clk = 0; // 클릭 횟수
let click_img=0; // 첫번재 클릭한 이미지
$(function(){
   
    box = $(".pic").length;
    
    let box=0;
    let clk = 0; //클릭 횟수
    let click_img //첫번째 클릭한 이미지
    let pic = {-1,-1}; // 서로다른이미지 선택한경우
    let same=false; // 같은 이미지 찾은 경우 감추기 안되게  
});

$(function(){
    box = $(".pic").length;

    for( var i=1; i<= parseInt(box/2); i++ ){
        var tmp = new Array();
        for(var k=1; k<= parseInt(box/2); k++){
            var t = Math.floor(Math.random()*parseInt(box/2));
            if( tmp.indexOf(t) == -1 )
                tmp.push(t);
            else
            k--;
        }
        board.push(tmp);
    }

    for( var i=0; i< board.length; i++){
        for( var k=0; k< board[i].length; k++){
            $(".pic").eq( i * board[i].length+k ).
            find("img").attr("src","./static/images/"+image[board[i][k]]);
        }
    }
    $(".pic").on("click",function(){
        clk++;
        var th = $(".pic").index($(this));
        
        if(clk == 1) {
            if( pic[0]!= -1){
                $(".pic").eq(pic[0]).find("img").hide();
                $(".pic").eq(pic[0]).find("img").hide();
                pic - [-1,-1];
            }
            click_img = board[parseInt(th/parseInt(box/2))][th%parseInt(box/2)];
            pic = th;
        
            if(clk==2){
            var sec = board[parseInt(th/parseInt(box/2))][th%parseInt(box/2) ];
            pic[1] = th;
            if (click_img -- sec )
                alert("같은 이미지 찾음");
                clk=0;
            click_img=0;
        }
    });

});