const photo=document.getElementById('photo')

let nextImageTimer;
function nextImage(){
    clearTimeout(nextImageTimer);
    search();
}


function search() {

    const breedName=document.getElementById("search").value.replaceAll(" ","").toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    
    .then(response=>{
        if(!response.ok){
            throw new Error("Breed not found");
        }
            return response.json()})
    .then(data=>{
        const dogImage = document.getElementById("photo");
        dogImage.src = data.message; // Set image source
        
        dogImage.style.display = "block"; // Show image

        //this works but cannot erase name after we search a new breed!! 

        // const para = document.createElement("p");
        // para.innerText =  `${breedName.charAt(0).toUpperCase()+ breedName.slice(1)}`;
        // document.body.appendChild(para);

        clearTimeout(nextImageTimer);
        nextImageTimer=setTimeout(nextImage,5000);
        photo.onclick=nextImage
})
    .catch(error => {
        console.error(error);
        alert("Breed not found!"); // Notify user
});
}

