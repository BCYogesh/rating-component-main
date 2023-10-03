let lists = document.querySelectorAll('ol li');
let submitBtn = document.getElementById('btn');
let beforeRating = document.querySelector('.box');
let afterRating = document.querySelector('.box-2');
let handleRating = document.querySelector('#handle-rating');


let result = null;

lists.forEach((list) => {
    list.addEventListener('click', (e)=> {

        let click = document.querySelector('.clicked')
        if(click){
            click.classList.remove('clicked')
        }
        let listEle = e.target;
        listEle.classList.add('clicked')

        result = e.target.innerHTML

       
       
    })
})

submitBtn.addEventListener('click', ()=> {
    if(result){
        handleRating.innerHTML = result;
        beforeRating.style.display = 'none';
        afterRating.style.visibility = 'visible';
    }
   
})