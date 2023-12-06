
$(function(){
    $("#apply").on("click", sizeApply);
});

function sizeApply(){
    var wd = $("").val();
    var hg = $("#hg").val();

    opener.$("#draw>table>tr>td").css("width",wd+"px");
    opener.$("#draw>table>tr>td").css("height",hg+"px");
}
window.close();