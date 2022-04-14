const hamburger = document.querySelector('.tab-icon');
const menu = document.querySelector('.head');
const exit = document.querySelector('.exit-icon');
const link = document.querySelectorAll('.road')
const rotate = document.querySelectorAll('.change_image_1');

let showMenu = false;



hamburger.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menu.classList.add('show');
        exit.classList.add('see');
        hamburger.classList.add('hide')
        //Reset the menu state
        showMenu = true;
    }
    exit.addEventListener('click', ()=>{
        menu.classList.remove('show');
        exit.classList.remove('see');
        hamburger.classList.remove('hide');
    })
     //Reset the menu state
     showMenu = false;
}

//rotate.addEventListener('mouseenter', rotateImage)

link.forEach((links, index)=>{    
    console.log(links, index);

   
    rotate.forEach((rot)=>{
        links.addEventListener('mouseenter', ()=>{
            rot.classList.add('rotate');
        })
        links.addEventListener('mouseleave', ()=>{
            rot.classList.remove('rotate');
        })
    })
    
})

