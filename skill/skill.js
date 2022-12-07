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
    let h4= document.createElement('h4');
    let img = document.createElement('img');

    img.setAttribute('src', item.image);
    h2.textContent = item.name;
    h4.textContent = 'I have Project experience with ' + item.name + ' : ' + item.made
    h4.textContent = 'Take course : '
    h4.textContent = '    ' + item.class1;
    h4.textContent = '    ' + item.class2;
    h4.textContent = 'Start Learning year : ' + item.year;
    
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(h4);
    
    document.querySelector(".cards").appendChild(card);
}
