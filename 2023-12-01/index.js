
$(function(){
    $(".menuList>.menuItem").on("mouseover",function(){
        $(this).chdildren(".subMenu").slideDown(3000);
        // show(), hide(), toggle();
        // fadeIn(), fadeOut(), fadeToggle();
        // slideUp(), slideUp(), slideToggle();
    });
});

$(".menuList>.menuItem").on("mouseout",function(){
    $(this).children(".subMenu").slideUp();
})