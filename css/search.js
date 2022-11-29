// get all element 
const searchBar = document.querySelector('.textsearch')
const elements = document.querySelectorAll('#data-items li')



// make search bar interactive with keyboard
searchBar.addEventListener('keyup', (e) => {

    // get value of 
    let seachVal = e.target.value

    // extract all Li 
    elements.forEach((elm) => {
        // make all Li hidden
        elm.style.display = "none"
        // check if Li have the same value search bar
        elm.outerText.includes(seachVal) ?
            elm.style.display = "" 
            :elm.style.display = "none"

    })

})