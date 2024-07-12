let products=document.getElementById('product-list')

fetch('https://fakestoreapi.com/products').then((response)=>{
    response.json().then((data)=>{
       data.forEach(item => {
        let title=document.createElement('div');
        title.innerHTML=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src=" ${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">price is ${item.price}.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
      `;
        products.appendChild(title);
       });
    });
}).catch((e)=>{
    console.log('something went wrong');
})

