const requestURL = "skill.json";

async function getSkill(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){ 
        const jsonObject = await response.json();
        console.log(jsonObject);
        const skill = jsonObject['skill'];
        skill.forEach(displaySkill);
    }
};

getSkill(requestURL);

function displaySkill(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h41= document.createElement('h4');
    let h42= document.createElement('h4');
    let h43= document.createElement('h4');
    let h44= document.createElement('h4');
    let h45= document.createElement('h4');
    let img = document.createElement('img');

    img.setAttribute('src', item.image);
    h2.textContent = item.name;
    h41.textContent = 'I have Project experience with ' + item.name + ' : ' + item.made
    h42.textContent = 'Take course : '
    h43.textContent = '    ' + item.class1;
    h44.textContent = '    ' + item.class2;
    h45.textContent = 'Start Learning year : ' + item.year;
    
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(h41);
    card.appendChild(h42);
    card.appendChild(h43);
    card.appendChild(h44);
    card.appendChild(h45);
    
    document.querySelector(".cards").appendChild(card);
}
