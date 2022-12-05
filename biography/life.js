const requestURL = "life.json";

async function getLife(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){ 
        const jsonObject = await response.json();
        console.log(jsonObject);
        const life = jsonObject['life'];
        life.forEach(lifeTable);
        life.forEach(lifeCard);
    }
};

getLife(requestURL);

function lifeTable(item)
{
    let section = document.createElement("section");
    let pAge = document.createElement("p");
    let pPlace = document.createElement("p");
    let pYear = document.createElement("p");
    let pScripture = document.createElement("p");
    let img = document.createElement("img");
    
    pAge.textContent = item.age;
    pPlace.textContent = item.place;
    pYear.textContent = item.year;
    pScripture.textContent = item.scripture;
    img.textContent = item.img;

    pWebsite.href = item.website;  // Add the link to it 

    img.setAttribute('src', item.img);
     
    section.appendChild(pAge);
    section.appendChild(pPlace);
    section.appendChild(pYear);
    section.appendChild(pScripture);
    section.appendChild(img);

    document.querySelector(".lifeTable").appendChild(section);
}
