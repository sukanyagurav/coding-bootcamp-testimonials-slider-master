const data=[
    {
        id:1,
        img:'images/image-tanya.jpg',
        name:'Tanya Sinclair',
        description:" \" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so  excited about the future. \"",
        profession:'UX Engineer'
    },
    {
        id:2,
        img:'images/image-john.jpg',
        name:'John Tarkpor',
        description:' \" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \"',
        profession:'Junior Front-end Developer'
    }
]
const sliderButtons=document.querySelector('.slider-buttons');
const userImage= document.querySelector('.user-image');
const userText=document.querySelector('.text');
const userName=document.querySelector('.username');
const userProfession=document.querySelector('.userProfession');
const userDetails=document.querySelector('.slider-user');
let currentItem=0
function showData(slider='next'){
    const currentSlide = data[currentItem];
    if(slider){
        if(slider==='prev'){
            userImage.classList.add('left-animation')
            setTimeout(()=>{
                userImage.classList.remove('left-animation')
            },500) 
        }
        else if(slider==='next'){
                userImage.classList.add('right-animation')
                setTimeout(()=>{
                    userImage.classList.remove('right-animation')
                },500)
        }
    }
    userImage.src=currentSlide.img
    userText.textContent=currentSlide.description;
    userText.classList.add('bottom-animation')
    setTimeout(()=>{
        userText.classList.remove('bottom-animation')
    },500)
    userDetails.classList.add('textAnimation')
    setTimeout(()=>{
        userDetails.classList.remove('textAnimation')
    },500)
    userName.textContent=currentSlide.name;
    userProfession.textContent=currentSlide.profession;
}
window.addEventListener('DOMContentLoaded',function(){
    showData()
})
sliderButtons.addEventListener("click",function(e){
    if(e.target.classList.contains('next')){
        currentItem++;
        if(currentItem > data.length-1){
            currentItem = 0;
        }
        showData('next')
    }
    else if(e.target.classList.contains('prev')){
        currentItem--;
        if(currentItem < 0 ){
            currentItem = data.length-1;
        }
        showData('prev')
    }
})