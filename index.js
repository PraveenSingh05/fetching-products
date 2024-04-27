

function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>console.log(data))

}
fetchData()


function prodData(arr){

   arr.forEach(el,i => {
        let container=document.getElementsByClassName("container");
        let div=document.createElement("div");
        let img=document.createElement("image");
        img.src=el.image;
        let title=document.createElement("h3");
        title.innerText=el.title;
        let price=document.createElement("p");
        price.innerText=el.price;
        div.append(img,title,price);
        container.append(div);

    });
    
}
prodData(arr);