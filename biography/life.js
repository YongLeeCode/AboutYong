const requestURL = "life.json";

async function getLife(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){ 
        const jsonObject = await response.json();
        console.log(jsonObject);
        const life = jsonObject['life'];
        life.forEach(lifeTable);
    }
};

getLife(requestURL);

function lifeCard(item)
{
    let card = document.createElement("section");
    let period = document.createElement("h3");
    let place = document.createElement("h4");
    let scripture = document.createElement("h4");
    let img = document.createElement("img");
    
    img.setAttribute('src', item.img);

    period.textContent = item.age;
    place.textContent = item.place;
    scripture.textContent = item.scripture;
     
    card.appendChild(period);
    card.appendChild(place);
    card.appendChild(scripture);
    card.appendChild(img);

    document.querySelector(".lifeCard").appendChild(card);
}
