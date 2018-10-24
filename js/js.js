$(function(){
    function shuaxin(){
        var msg=[3261368806,2758442986,2722988770];
        var index = Math.floor((Math.random()*msg.length)); 
        $('.switch').text(msg[index])
    }
    shuaxin();
})