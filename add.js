const product = [
    {
        image: 'Dessert/pancake.png',
        title: 'Pancake',
        price: 59 
    },
    {
        image: '.....',
        title: 'Egg Tart',
        price: 15 
    },
]

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
    document.getElementById('root').innerHTML = categories.map(item => {
        var {image, title, price} = item;
        return `
            <div class="delete-product">
                <button class="delete-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg></button>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div class="col-4 pic-product">
                    <div class="pic">
                        <img src="${image}" alt="Pancake" width="300px">
                    </div>
                </div>
                <div class="col-8 detail-product">
                    <div class="body-detail">
                        <h3>${title}</h3>
                        <h6>Type: Dessert</h6>
                        <h6>Topping: A/B/C</h6>
                    </div>
                    <h3 class="price">฿${price}</h3>
                    <div class="add-delete">
                        <input type="button" value="-" class="down">
                        <input type="text" value="1" class="text-up-down text-center">
                        <input type="button" value="+" class="up">
                    </div>
                </div>
            </div>
        `;
}).join('');

var carts = []

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}
function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map(item => {
            var {image, title, price} = item;
            return `
                <div class="delete-product">
                    <button class="delete-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg></button>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div class="col-4 pic-product">
                        <div class="pic">
                            <img src="${image}" alt="Pancake" width="300px">
                        </div>
                    </div>
                    <div class="col-8 detail-product">
                        <div class="body-detail">
                            <h3>${title}</h3>
                            <h6>Type: Dessert</h6>
                            <h6>Topping: A/B/C</h6>
                        </div>
                        <h3 class="price">฿${price}</h3>
                        <div class="add-delete">
                            <input type="button" value="-" class="down">
                            <input type="text" value="1" class="text-up-down text-center">
                            <input type="button" value="+" class="up">
                        </div>
                    </div>
                </div>
            `;
        }).join('');        
    }
}
    