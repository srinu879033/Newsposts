

const root=document.getElementById("root")
console.log(root)

const fetchPost=async()=>{
    const response=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f5924b591dc44b6c9ac3ea15217d32d4")
    const data=await response.json()
    addPost(data.articles)
   
};


const addPost=(x)=>{
    for (let y of x)
    {
        
    let container1=document.createElement("div")
    root.appendChild(container1)
    container1.classList.add("col-4 shadow bg2")

    let container2=document.createElement("div")
    container1.appendChild(container2)
    
    let pic=document.createElement("img")
    pic.classList.add("pic","mt-3")
    pic.src=y.urlToImage;
    container2.appendChild(pic)

    let author=document.createElement("p");
    author.classList.add("m-0","author")
    container2.appendChild(authhor)
    author.textContent=y.author

    let date=document.createElement("p")
    date.classList.add("mt-2","date");
    container2.appendChild(date)
    date.textContent=y.pubishedAt
    
    let container3=document.createElement("div");
    container1.appendChild(container3);

    let heading=document.createElement("h1")
    heading.classList.add("heading")
    container3.appendChild(heading)
    heading.textContent=y.title

    let text=document.createElement("p")
    text.classList.add("text")
    container3.appendChild(text)
    text.textContent=y.content

    let container4=document.createElement("div")
    container3.appendChild(container4)
    container4.classList.add("text-right")

    let anchor=document.createElement("a")
    anchor.classList.add("d-flex","flex-row","justify-content-end");
    container4.appendChild(anchor);

    let heading2=document.createElement("h1")
    heading2.classList.add("heading2","mr-3")
    anchor.appendChild(heading2)
    heading2.textContent="Read More"

    let icon=document.createElement("i")
    icon.classList.add("fas","fa-hand-point-right","icon");
    anchor.appendChild(icon)

    }
}
fetchPost()


