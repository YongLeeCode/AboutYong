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

function lifeTable(item)
{
    let tr = document.createElement("tr");
    let tdAge = document.createElement("td");
    let tdPlace = document.createElement("td");
    let tdYear = document.createElement("td");
    let tdScripture = document.createElement("td");
    let img = document.createElement("img");
    
    tdAge.textContent = item.age;
    tdPlace.textContent = item.place;
    tdYear.textContent = item.year;
    tdScripture.textContent = item.scripture;
    img.textContent = item.img;

    img.setAttribute('src', item.img);
     
    tr.appendChild(tdAge);
    tr.appendChild(tdPlace);
    tr.appendChild(tdYear);
    tr.appendChild(tdScripture);

    document.querySelector(".lifeTable").appendChild(tr);
}
