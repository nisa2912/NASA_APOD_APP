function runAPP(){
    const api={
    key: config.API_KEY,
    base: "https://api.nasa.gov/planetary/apod?api_key="
}

let newDate= `&date=${searchbox.value}`;


const getResults = async () => {
    const response = await fetch(`${api.base}${api.key}${newDate}`);
    const result = await response.json();
    displayResults(result);
}


const displayResults = (result)=> {
    console.log(result); 
    let title = document.querySelector('.details .Title');
    title.innerText = `${result.title}`; 
    
    let image = document.querySelector('.current .change');
    image.src= `${result.url}`;

    let date=document.querySelector('.date');
    date.innerText=`${result.date}`;

    let copyright =document.querySelector('.cr');
    copyright.innerHTML = `Image copyright belongs to: ${result.copyright}`;
   
    let explain =document.querySelector('.current .explanation');
    explain.innerText= `${result.explanation}`;

}

getResults();
}

const searchbox = document.querySelector('.search-box1');
searchbox.addEventListener('keypress', function(event){  
           if(event.keyCode==13){
           runAPP();}})
       

runAPP();



    