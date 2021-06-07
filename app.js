
const navBtn = document.getElementsByClassName('nav-button');
const moreBtn = document.getElementById('about-more');

navBtn[0].addEventListener('click',function(){
    window.scroll({top:0,behavior:"smooth"});
});

navBtn[1].addEventListener('click',function(){
    document.getElementById('offset1').scrollIntoView({behavior:"smooth"});
});

navBtn[2].addEventListener('click',function(){
    document.getElementById('offset2').scrollIntoView({behavior:"smooth"});
});

moreBtn.addEventListener('click',function(){
    document.getElementById('offset3').scrollIntoView({behavior:"smooth"});
});

navBtn[3].addEventListener('click',function(){
    document.getElementById('offset4').scrollIntoView({behavior:"smooth"});
});