const myButton=document.getElementById('breedInput');
myButton.oninput=function main() {
    fetch ('https://dog.ceo/dog-api/documentation/')
    .then(response=>response.json())
    .then(data=> {
        const datalist = document.getElementById("breedSuggestion");
        }
    )
    
}