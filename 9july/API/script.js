let product1=document.getElementsByClassName('product-list2')[0]
let products=document.getElementById('product-list')

fetch('https://fakestoreapi.com/products').then((response)=>{
    response.json().then((data)=>{
       data.forEach(item => {
        let title=document.createElement('li');
        title.innerHTML=item.title;
        products.appendChild(title);
       });
    });
}).catch((e)=>{
    console.log('something went wrong');
})
fetch('https://fakestoreapi.com/products').then((response)=>{
    response.json().then((data)=>{
       data.forEach(item => {
        let title=document.createElement('li');
        title.innerHTML=item.title;
        product1.appendChild(title);
       });
    });
}).catch((e)=>{
    console.log('something went wrong');
})
