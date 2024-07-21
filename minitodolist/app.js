const inputBox = document.getElementById('input-box')
const btn = document.getElementById('input-button')
const listContainer = document.getElementById('list-container')

btn.addEventListener('click', (e) =>{
    
        if (inputBox.value === '') {
            alert('Add a note')
        } else {
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span)
        }
        inputBox.value = '';
        saveData();
        
    
})

inputBox.addEventListener('keypress', (event)=>{

    if (event.key === 'Enter') {
      btn.click();  
    }
})
listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const check = event.target.classList.toggle('checked')
        saveData()
    }
    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showNotes() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showNotes()