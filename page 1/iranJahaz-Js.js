let home;
home = document.getElementById("home");
let shape;
shape = document.getElementById("shape");
let buy;
buy = document.getElementById("buy");
let product;
product = document.getElementById("product");
function myHome() {
    home.classList.replace("fa-regular" , "fa-solid")
    shape.classList.replace("fa-solid" , "fa-regular")
    buy.classList.replace("fa-solid" , "fa-regular")
    product.classList.replace("fa-solid" , "fa-regular")
}
function myShape(){
    shape.classList.replace("fa-regular" , "fa-solid")
    home.classList.replace("fa-solid" , "fa-regular")
    buy.classList.replace("fa-solid" , "fa-regular")
    product.classList.replace("fa-solid" , "fa-regular")
}
function myBuy(){
    buy.classList.replace("fa-regular" , "fa-solid")
    home.classList.replace("fa-solid" , "fa-regular")
    shape.classList.replace("fa-solid" , "fa-regular")
    product.classList.replace("fa-solid" , "fa-regular")
}
function myProduct(){
    product.classList.replace("fa-regular" , "fa-solid")
    home.classList.replace("fa-solid" , "fa-regular")
    shape.classList.replace("fa-solid" , "fa-regular")
    buy.classList.replace("fa-solid" , "fa-regular")
}