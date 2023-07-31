let category = document.querySelector('#category');
let categories = document.querySelector('#categories');

// console.log(category,categories);

category.addEventListener('click', ()=>{
  if (categories.style.display === 'none') {
    categories.style.display = 'flex'
    categories.style.transition = '1.2s cubic-bezier(0.075, 0.82, 0.165, 2)'
  }
  else{
    categories.style.display = 'none'
  }
})
category.addEventListener('blur',(e)=>{
  e.target.preventDefault()
    categories.style.display = 'none'
})
window.addEventListener('scroll',()=>{
    categories.style.display = 'none'
})

//FOR THE CONTACT PAGE
const accordions = document.querySelectorAll(".accord")

accordions.forEach(ele =>  {
    ele.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.classList.contains("accord_control")){
            classRemover(accordions,"open")
            ele.classList.toggle("open")

        }
    })
})

function classRemover(arr,className){
    arr.forEach(ele =>  {
    ele.classList.remove(className)
})
}

//DISPLAYING THE CONTACT

let contact = document.querySelector('#contact');
let contacts = document.querySelector('#contacts');
let main = document.querySelector('main')
function display(e) {
  e.target.preventDefault()
  if (main.style.display === 'flex') {
    main.style.display === 'none'
    contacts.style.display === 'flex'
  }
  else{
    main.style.display === 'flex'
    contacts.style.display === 'none'
  }
}

contact.addEventListener('click', ()=>{
  if (main.style.display !='flex') {
    main.style.display = 'none'
    contacts.style.display = 'flex'
  }
 
});
