const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const rickroll = document.querySelector(".popup-link");


button.addEventListener('click', () =>{
    popup.style.display = 'block'
})

popup.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => 
        className === classNameOfClickedElement)

    if(shouldClosePopup){
       popup.style.display = 'none'
    }
})

rickroll.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})