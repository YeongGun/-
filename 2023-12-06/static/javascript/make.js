// make.js

$(function(){
    $("#make").on("click",makeTable);
});

function makeTable(){
    var row = Number( $("#row").val() );
    var col = Number( $("#col").val() );
}
    var table ="<table>";
    for(var i=1; i<=row; i++){ // 행, tr
    table += "<tr>";
    for(var k=1; k<=col; k++){ //열, td
    table +="<td></td>";
}
table += "</tr>";
    }
    table += "</table>";

// $("#")


    opener.document.getElementById("draw").innerHTML="aaaa"; //부모를 지칭하는것은 오프너임 
 opener.a();
