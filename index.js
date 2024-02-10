import menuArray from './data.js'

console.log(menuArray)

let foodCont = document.getElementById("food-container")
let orderSection = document.getElementById("order-section")


function foodRender(arr){

    const itemHtml = arr.map(item => {
        return `<div class="inner-section">
        <div class="img-container">
        <img src="${item.image}" alt="" class="product">
        </div>
        <div class="details-container">
        <h2>${item.name}</h2>
        <h3>${item.ingredients}</h3>
        <h2>£${item.price}</h2>
        </div>
        <div class="addToCart" data-add=${item.id}>
        <img src="images/plus.png" class="plus-sign" data-add=${item.id} >
        </div>
        </div>`
    })
    return itemHtml.join('')
}

foodCont.innerHTML = foodRender(menuArray)


document.addEventListener('click', function(e) {
    // console.log(e.target.dataset.add)
    const eTarget = e.target.dataset.add
    for(let i = 0; i< menuArray.length; i++) {
        // console.log(menuArray[i].id.toString(), eTarget)
        if(menuArray[i].id.toString() === eTarget) {
            // console.log('yes', menuArray[eTarget].name)
            orderRender(menuArray[eTarget].name)
        }
        
    }

  
    })
    let orderDB = []
    function orderRender(itemName) {
        let html = ''
        orderDB.push(itemName)
        // console.log(orderDB)
        const counts = {}
        for(const item of orderDB){
            counts[item] = counts[item] ? counts[item] + 1 : 1;
        }
        // console.log(counts)
        for (let key in counts) {
            console.log(key, counts[key]);
            html += `<p class="order">${key}</p><p class="order">${counts[key]}`
            }
            orderSection.innerHTML = html
        }
     
    
              

