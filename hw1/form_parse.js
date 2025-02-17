const params= new URLSearchParams(location.search)
console.log(location.search)
document.getElementById("first_name").innerText=params.get("first_name")