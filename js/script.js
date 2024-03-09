
//show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250 )
})

//close by click outside
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
} )


//scroll event nav-top
window.addEventListener('scroll',function(){
    const header=document.querySelector('.main-head');
    if(window.scrollY > 50){
        header.classList.add('header-up');
    }else{
        header.classList.remove('header-up')
    }

});


//Seachbox on/off click event

function btn_search(){
    var con = document.getElementById("searchbox");
    if(con.style.display=='none'){
        con.style.display='block';
    }else{
        con.style.display='none';
    }
}

//Seachbox on/off click event

function btn_sort(){
    var con = document.getElementById("sort_list");
    if(con.style.display=='none'){
        con.style.display='block';
    }else{
        con.style.display='none';
    }
}




//Slider
// const slider = document.querySelector('.list-slider');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const cardWidth = document.querySelector('.card-s').offsetWidth;
// let counter = 0;

// nextBtn.addEventListener('click', () => {
//     if (counter >= slider.children.length - 1) return;
//     counter++;
//     slider.style.transform = `translateX(${-cardWidth * counter}px)`;
// });

// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     counter--;
//     slider.style.transform = `translateX(${-cardWidth * counter}px)`;
// });
