
$('.nav>li').on('click',function(){
    $(this).addClass("active").siblings().removeClass("active");
})
$(".client").on('click',function(){
    $('.server').css('display','block').siblings().css('display','none');
})
$(".agency").on('click',function(){
    $('.certification').css('display','block').siblings().css('display','none');
})
$(".bazaar").on('click',function(){
    $('.patner').css('display','block').siblings().css('display','none');
})