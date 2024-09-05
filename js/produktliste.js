window.addEventListener("DOMContentLoaded", init);
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
let productsURI = undefined;

function init (){
    if(urlParams.has("category")){
        productsURI = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
    } else{
        productsURI = `https://kea-alt-del.dk/t7/api/products?limit=10`;
    }
    fetch(productsURI)
        .then(res=>res.json())
        .then(data=>showProducts(data))
}


function showProducts(products){
    // looper og kalder showProduct
    products.forEach(showProduct)
}

function showProduct(product){
    console.log(product);
    //fang template
    const template = document.querySelector("#smallProductTemplate").content;
    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector("h3").textContent=product.productdisplayname;
    if(product.soldout){
        //produktet er udsolgt
        copy.querySelector("article").classList.add("soldOut");
    }
    copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("img").alt = `image and ${product.productdisplayname}`;
    copy.querySelector(".read-more").setAttribute("href",`produkt.html?id=${product.id}`);
    //appende
    document.querySelector("main").appendChild(copy);
}


