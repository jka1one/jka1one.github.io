document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll("img");

for (const image of images){
    fetch("https://images.unsplash.com/photo-1610894372363-21183fa31111?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    .then(Response=> Response.json())
    .then( data=> {
        image.src= data.message
        image.width =100;
        image.height=100;
        
    })
}

})