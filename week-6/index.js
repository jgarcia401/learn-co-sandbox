function makeColorfulDiv(color) {
 
 // 1. make a div
let newDiv = document.createElement('div')

// red = <div></div>
// 2. <div>red</div>
newDiv.innerHTML = color

// 3. div's background color is red
newDiv.style.backgroundColor = color

// 1. find #colors div

const colors = document.getElementById('colors')

// 2. Append the child to the #colors div

colors.appendChild(newDiv)
 
 
  
}




makeColorfulDiv('blue')
makeColorfulDiv('green')






// Reuse code -----> Functions