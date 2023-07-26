document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = (document.getElementById('create-task-form'))
//console.log (form)
  form.addEventListener('submit', (e) => {
//console.log(e)
    e.preventDefault();
    

    let text = document.getElementById('new-task-description').value;
    console.log(text)
    card(text);
    form.reset()
function card(todo){
  let ul = document.querySelector('#tasks');
  console.log(ul)
  let li = document.createElement('li')
  
  let btn = document.createElement('button')
  let p = document.createElement('p')
 p.textContent = `$form`
 p.appendChild(btn)
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x";
  li.textContent =todo;
  li.appendChild(btn);
  ul.appendChild(li)
 
  

}

    
   // .appendChild('li')
    //console.log (card)
  })
  
   //let li = document.createElement('li')
    //li.textContent = todo
    //todo.appendChild('li')
    //let card = document.getElementById('task')
 //let todo = document.getElementById('list')
//let p = document.createElement('p')
 //p.textContent = `$form`
 //let btn = document.createElement('button')
 //btn.textContent = 'x'
// p.appendChild(btn)
 //btn.addEventListener('click' ,handleDelete)
});


function handleDelete (e){ 
  e.target.parentNode.remove()

}