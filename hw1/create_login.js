const $ = document.querySelector.bind(document); 
// document is the whole html page.

const toggleBtn = $('toggle');

toggleBtn.addEventListener('click', e=>{
    if(toggleBtn.innerText =='DARK'){
        document.documentElement.setAttribute('theme','dark');
        toggleBtn.innerText = 'LIGHT';
    }else{
        document.documentElement.removeAttribute('theme');
        toggleBtn.innerText = 'DARK';
    }
    localStorage.setItem('theme',document.documentElement.getAttribute('theme'));
    // set the theme in local storage. the theme being saved is whatever the attribute of the document element is right now.
});

const params = new URLSearchParams(location.search);

for (const [key, value] of params) {
    console.log(`Parameter: ${key}, Value: ${value}`);
}
