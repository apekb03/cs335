// const myButton=document.getElementById('breedInput');
// myButton.oninput=function main() {
//     fetch ('https://dog.ceo/dog-api/documentation/')
//     .then(response=>response.json())
//     .then(data=> {
//         const datalist = document.getElementById("breedSuggestion");
//         }
//     )
    
// }


fetch("https://dog.ceo/api/breeds/list/all")
    .then(response=>response.json())
    .catch(error=>console.error(error));

