const carousel = document.getElementById('carousel');   
//create a card
function userCard(user){
    const card = document.createElement('div');
    card.className='card';

    const img = document.createElement('img');
    img.src = user.picture.large;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    card.appendChild(name);

    const address = document.createElement('p');
    address.innerHTML = `${user.location.city} ${user.name.city} 
    <br>${user.name.country}`;
    card.appendChild(address);

    
    const email = document.createElement('h4');
    email.innerHTML = user.email;
    card.appendChild(email);

    const phone = document.createElement('h5');
    phone.innerHTML = user.phone;
    card.appendChild(phone);

    return card;
}
//add card to carousel
function addUser(user){
    let card=userCard(user);
    carousel.appendChild(card); 
    // append child adds the card to the carousel
}

//switch over to the next card
var currentUser=0, nextCardTimer;
function nextCard(){
    clearTimeout(nextCardTimer);
    currentUser++;
    if (currentUser>=carousel.children.length){
        currentUser=0;
        setTimeout(()=>{carousel.scrollLeft=0},5000);
    }
    carousel.children[currentUser].scrollIntoView(
        {block:'end', behavior:'smooth'});
    nextCardTimer=setTimeout(nextCard,5000);
}

//loads everything
function main(){
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        carousel.innerHTML='';
        console.log(data);
        data.results.forEach(addUser);
        //every 5 sec next card
        nextCardTimer=setTimeout(nextCard,5000);
        //next card everytime smn clicks
        carousel.addEventListener('click',nextCard);
    });
}



main();