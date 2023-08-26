window.addEventListener("scroll", function() {
    
    const percent = Math.min((document.documentElement.scrollTop / (document.documentElement.offsetHeight - window.innerHeight) * 100), 100);
    document.getElementById("scrollBar").style.width =  percent + '%';
    document.getElementById("scrollPercent").innerHTML = Math.round(percent) + '%';
});

function scrollto(input){
    const element = document.getElementById(input);
    const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({top: y, behavior: 'smooth'});

}