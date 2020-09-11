const hatform  = document.querySelector('form')
const element = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

hatform.addEventListener('submit', (e) => {
    e.preventDefault()
    const name1 = element.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/house?name=' + name1 ).then((response) => {
    response.json().then((data) => {
        messageOne.textContent = data.house
        messageTwo.textContent = data.name
        
    })
    document.querySelector('input').value='';
})

})