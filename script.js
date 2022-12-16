const header = document.querySelector('header');
const btn = document.querySelector('.btn');
const firstBlock = document.querySelector('section:first-child');
const firstBlockHight = firstBlock.scrollHeight;
const progressBar = document.querySelector('.progressbar');
let windowHeight =  document.body.scrollHeight - window.innerHeight;
const items = document.querySelectorAll('.Items');

let scrollStart = 0;
function move(){
    window.scrollTo(0,0)
}
btn.addEventListener('click',move);


window.addEventListener('scroll',function(){
    
    
    
    
    const scrollTop = this.scrollY;
    if(scrollTop >= firstBlockHight){
        if(header.classList.contains('header--deactive')){
            header.classList.replace('header--deactive','header--fixed');
        }
        else{
            header.classList.add('header--fixed');
        }
        
        btn.classList.add('btn--fixed');
       
    }
    else{
        header.classList.replace('header--fixed','header--deactive');
        btn.classList.remove('btn--fixed');

    }
    
    FillProgressBar();
    for(let i = 0;i<items.length;i++){
        if(!IsPartVisible(items[i])){
            if(items[i].classList.contains("list--deactive")){
                items[i].classList.replace("list--deactive","list--active");
            }else{
                items[i].classList.add("list--active");
            }
            
        }
        else{
            if(items[i].classList.contains("list--active")){
                items[i].classList.replace("list--active","list--deactive");
            }
            
            
            
        }
    };
    
    scrollStart = scrollTop
    
});
function FillProgressBar() { 
    let windowScroll = window.scrollY;
    let windowHeight =  document.body.scrollHeight - window.innerHeight;
    let progressBarWidth = ((windowScroll / windowHeight)*100).toFixed(2);
    progressBar.setAttribute('style',`width:${progressBarWidth}%`)
    
 };
 function IsPartVisible(elem) {
    let windowHeight =  window.innerHeight;
    let top = elem.getBoundingClientRect().top;
    let bottom = elem.getBoundingClientRect().bottom;
    let hight = elem.getBoundingClientRect().height;
    return (top + hight >= 0) && (hight + windowHeight > bottom)
}
 function isFullyVisible(elem){
    let windowHeight =  window.innerHeight;
    let top = (elem.getBoundingClientRect().top);
    let bottom = (elem.getBoundingClientRect().bottom);
    return (top >= 0) && (bottom <= windowHeight);
 }



