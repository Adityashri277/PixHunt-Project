const searchbox = document.querySelector("#searchbox");
const searchbtn = document.querySelector("#searchbtn");
const searchform = document.querySelector("#search");
const searchresult = document.querySelector(".searchresult");
const showmorebtn = document.querySelector("#showmorebtn");
const Forestbtn = document.querySelector("#forest");
const wildlifebtn = document.querySelector("#wildlife");
const skyscraperbtn = document.querySelector("#skyscraper");
const animalsbtn = document.querySelector("#animals");
const minimalbtn = document.querySelector("#minimal");
const travelbtn = document.querySelector("#travel");

let keyword = "";
let page = 1;
const accesskey = "I1HZqPHUuFsfB0VQ5FLw5adawZ62_LhyJkFZTZP59ms";
async function searchImages() {
  keyword = searchbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const response = await fetch (url);
  const data = await response.json();
  if(page==1){
    searchresult.innerHTML="";
  }
    const results = data.results;
    results.map((result) => {
        const image =document.createElement("img");
        image.src = result.urls.small;
        image.loading = "lazy"; 
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"; // open in new tab
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);

    })

    showmorebtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => { 
    e.preventDefault();
    searchImages();
});
Forestbtn.addEventListener("click", () => {
    searchbox.value = "forest";
    page = 1;
    searchImages();
})
skyscraperbtn.addEventListener("click", () => {
    searchbox.value = "skyscraper";
    page = 1;
    searchImages();
})

minimalbtn.addEventListener("click", () => {
    searchbox.value = "minimal";
    page = 1;
    searchImages();
})
animalsbtn.addEventListener("click", () => {
    searchbox.value = "Animals";
    page = 1;
    searchImages();
})
travelbtn.addEventListener("click", () => {
    searchbox.value = "Travel";
    page = 1;
    searchImages();
})
wildlifebtn.addEventListener("click", () => {
    searchbox.value = "wildlife";
    page = 1;
    searchImages();
})
searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchImages();
});

showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

