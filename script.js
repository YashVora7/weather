let cityname = document.getElementById("city").value 

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=734bf4d0732806483bc12a0d6eb0a16c`)
.then((response) => response.json())
.then((data) => console.log(data)) 