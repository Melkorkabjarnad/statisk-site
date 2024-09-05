fetch("https://kea-alt-del.dk/t7/api/categories")
    .then(res => res.json())
    .then(showCategories)

function showCategories(cats){
    cats.forEach(showCategory)
}

function showCategory(cat){
    //fanger vores template
    const template = document.querySelector("template").content;
    //cloner
    const clone = template.cloneNode(true);
    //ændrer indhold
    clone.querySelector("a").textContent = cat.category;
    clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;
    //appender
    document.querySelector(".categorylist").appendChild(clone);
}

/*const categorylist = document.querySelector(".categoryList");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");

fetch("https://kea-alt-del.dk/t7/api/categories")
    .then((response) => response.json())
    .then((categories) => {
        categories.forEach((category) => {
            categorylist.innerHTML += <a href= "kategori.html?category=$(category.category)">${category.category}</a>;
        });
    });

if(params.has("category")) {
    url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
    url = "https://kea-alt-del.dk/t7/api/products";
}
*/