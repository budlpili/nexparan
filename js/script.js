
// //show cart on click
// const divtoShow = '.mini-cart';
// const divPopup = document.querySelector(divtoShow);
// const divTrigger = document.querySelector('.cart-trigger');

// divTrigger.addEventListener('click', () => {
//     setTimeout(() => {
//         if(!divPopup.classList.contains('show')) {
//             divPopup.classList.add('show');
//         }
//     }, 250 )
// })

// //close by click outside
// document.addEventListener('click', (e) => {
//     const isClosest = e.target.closest(divtoShow);
//     if(!isClosest && divPopup.classList.contains('show')) {
//         divPopup.classList.remove('show')
//     }
// } )


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



// signup signin
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.querySelector(".m-container");

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});
signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});



// Modal
const modalOpenButton = document.getElementById('modalOpenButton');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');

modalOpenButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});