let input = document.querySelector("#input")
let div= document.querySelector(".container")
let err = document.querySelector(".err")
// console.log(input)
input.addEventListener("submit",async(e)=>{
    // console.log(input.value)
    e.preventDefault()
    let searchV = e.target.find.value;
    console.log(e.target.find)
    if (searchV.length>3) {
    let url = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e606f4c4&s=${searchV}`) ;
        
    
    let urldata = await url.json()
    let data = urldata.Search
    // e.target.find.value=""
    div.innerHTML=" ";
    printdata(data,div,err)
}})

function printdata(data,div,err){
    if (!data) {
        err.innerHTML="Data not found"
        console.log("data not found")
    }else{
        err.innerHTML=""
        data?.forEach(element => {
            let card = document.createElement("div");
            card.classList.add("m-4", "bg-[blue]", "h-[400px]", "w-[250px]", "p-4","flex","flex-col", "rounded");
            card.innerHTML = `
            <img loading="lazy" class="h-[300px] rounded" src="${element.Poster}" alt="">
            <p class="text-white font-bold text-xl">${element.Title}</p>
            `
            div.append(card)
            console.log(element.Poster)
            console.log(element.Title)
        });
    }
}












// for (let i = 0; i < url.length; i++) {
//     console.log(url)
    
// }

// console.log(urldata.json)

// console.log(data)





// urldata.then(res=>
//     res.json()).then(d=>{
//         console.log(d)
//     })
    
