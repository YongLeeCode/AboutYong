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
    let tr = document.createElement("tr");
    let tdAge = document.createElement("td");
    let tdPlace = document.createElement("td");
    let tdYear = document.createElement("td");
    let tdScipture = document.createElement("td");
    let tdImg = document.createElement("img");
    
    tdAge.textContent = item.age;
    tdPlace.textContent = item.place;
    tdYear.textContent = item.year;
    tdScipture.textContent = item.scripture;
    tdImg.textContent = item.img;

    tdWebsite.href = item.website;  // Add the link to it 

    tr.appendChild(tdAge);
    tr.appendChild(tdPlace);
    tr.appendChild(tdYear);
    tr.appendChild(tdScipture);
    tr.appendChild(tdimg);

    document.querySelector(".lifeTable").appendChild(tr);
}

document.querySelector("#tableButton")