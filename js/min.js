let createButton       = document.querySelector('.todo__create');
let testEdit = document.querySelector('#edit');
let del      = document.querySelector('li');
let testUL   = document.querySelector('ul');

createButton.onclick = function() {
    const todoInputValue   = document.querySelector('.todo__text').value;
    let newLI  = document.createElement('li');
    let todoName    = document.createElement('input');
    todoName.value = todoInputValue;
    todoName.disabled = true;
    console.log(todoInputValue);

    let editButton = document.createElement('button');
    editButton.innerHTML = 'Редактировать';
    editButton.classList.add('pp');
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Удолить';
    deleteButton.classList.add('pp');
    
    
    newLI.appendChild(todoName );
    newLI.appendChild(editButton);
    newLI.appendChild(deleteButton);
    
    testUL.appendChild(newLI);
    
    clearText();
        
    deleteButton.onclick = function() {
         newLI.remove();
    }

}
function clearText() {
    document.querySelector('.todo__text').value = '';
}
testEdit.onclick = function() {
    let input = document.querySelector('.test4');
    input.removeAttribute('disabled');
    input.classList.remove('test4');
    input.classList.add('test44');
    console.log(input);   
}
del.onclick = function() {
    newLI.remove();
}

