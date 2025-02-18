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

        clearTimeout(nextImageTimer);
        nextImageTimer=setTimeout(nextImage,5000);
        photo.onclick=nextImage
})
    .catch(error => {
        console.error(error);
        alert("Breed not found!"); // Notify user
});
}

