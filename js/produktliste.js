const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(data=>showProducts(data))


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
    //appende
    document.querySelector("main").appendChild(copy);
}
/*
 <article class="smallProduct">
            <img src="img/sahara.webp" alt="sahara shirt">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="subtle">Tshirts / Nike</p>
            <p class="price">
                DKK 1595,-
            </p>
            <a href="produkt.html">Read More</a>
        </article>
{
    "id": 1165,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2013,
    "usagetype": "Sports",
    "productdisplayname": "Mean Team India Cricket Jersey",
    "price": 2495,
    "discount": 45,
    "brandname": "Nike",
    "soldout": 0
}
*/