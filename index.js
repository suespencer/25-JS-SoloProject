import menuArray from './data.js'

console.log(menuArray)

let foodCont = document.getElementById("food-container")

function foodRender(arr){

    const itemHtml = arr.map(item => {
        return `<div class="inner-section">
        <div class="img-container">
        <img src="${item.image}" alt="">
        </div>
        <div class="details-container">
        <h2>${item.name}</h2>
        <h3>${item.ingredients}</h3>
        <h2>£${item.price}</h2>
        </div>
        </div>`
    })
    return itemHtml.join('')
}

foodCont.innerHTML = foodRender(menuArray)
