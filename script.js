let title = document.querySelector('.title');

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    title.style.transform = 'scale(' + scrollTop * .009 + ')'
    console.log(scrollTop)

    if(scrollTop == 0){
        title.style.transform = 'scale(1)'
    }
}

window.addEventListener('scroll', scrollParallax);