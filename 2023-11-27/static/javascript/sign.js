

$(function(){

    // 전부 체크 체크박스에 체크시 전체 체크로 변하게 또는 반대상황
    $("#all").on("click",function(){
        let isCheck = $(this).is(":checked");
        if(isCheck)
        $(".ability_list").prop('checked',true);
    else  
        $(".ability_list").prop('checked', false);
    });
    
    
    $("#mypw").on("keyup", function(){
        if( $(this).val().length < 6 || $(this).val().length > 12){
            $(".pwvaild").text("비밀번호 6~ 12자 입니다.");
        }else{
            $(".pwvaild").text('비밀번호 안전');
        }
    })
    $("#myphone").on("keyup",function(){
        let var num = $(this).val();
        
        //num = num.replace(/[^0-9]/g,'').replace(/^(\d{3})(/d{4})(\d{4})$/, `$1-$2-$3`);
        num = num.replace(/[^0-9]/g, '')replace(/^(\d{0,3})(\d{0,4})$/g,`$1-$2-$-3`).;
                    replace(/^(\d{0,3}(\d{0,4})(\d{0,4}$/g,`$1-$2-$3`)
                    replace(/(\-{1,2})$/g,"");
        $(this).val(num);
        

        // 문자열은 기본구조가 배열의 구조이지만 자바스크립트에서 문자열 객체로 사용되기
        // 때문에 객체전용 함수가 따로 존재한다 .
    //     if( num.length >=4 )
    //         num.splice(0,3)+"-"+num.splie(3);
    //         num.replace(3,"-");
    //         $(this).val(num);
    // });
    // if(num.length == 9){
    //     num= num.slice(0,8)+"-"+num.splie(8);
    //     $(this).val(num);
    // }
    $("#join").on("click",function(){
        
        //var chk = $(".alility_list").eq(0).is(":checked");
        //alert( chk );
        var len = $(".ability_list:checked").length;
        alert(len);

        let chk = ''; //체크박스에 체크된 값들 저장 변수
        $.each( $(".ability_list:checked") , function(){ //체크되어있는 태그만 반복문 처리
            chk += $(this).val() + " ";

        });



        if( $("#myid").val() == '' ){
            alert("아이디를 입력하세요");
            $("#myid").fcus();
        }
        if( $("#mypw").val() != $("pwre").val() )
        alert("비밀번호가 같지 않습니다.");
        $("#mypw").val('');
        $("#pwre").val('');
        $("#mypw").focus();
    });
});