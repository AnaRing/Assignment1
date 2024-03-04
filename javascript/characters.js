// asynch fetch
const fetchCharacters = async()=> {
    const response = await fetch('https://swapi.dev/api/people/');
    const result = await response.json();
    renderData(result.results);
}  

fetchCharacters();

function renderData(characters){
    const ul = document.querySelector('.main__container');
    document.body.appendChild(ul);

    characters.forEach(character => {
        console.log(character);
        // create elements
        const li = document.createElement('li'); 
        const characterName = document.createElement('span');
        const characterGender = document.createElement('span');
        const characterHeight = document.createElement('span');
        const characterSkinColor = document.createElement('span');
        const characterPicture = document.createElement('span');
        const characterImage = document.createElement('img');

        // append elements
        ul.append(li);
        li.appendChild(characterName);
        li.appendChild(characterGender);
        li.appendChild(characterHeight);
        li.appendChild(characterSkinColor);
        li.appendChild(characterPicture);

        // making content
        characterName.textContent = character.name;
        characterGender.textContent = character.gender;
        characterHeight.textContent = character.height;
        characterSkinColor.textContent = character.skin_color;
        /* characterPicture.src =  */

        // adding classes to elements
        li.classList.add('created__Li');
        characterName.classList.add('character__Name');
        characterGender.classList.add('character__Gender');
        characterHeight.classList.add('character__Height');
        characterSkinColor.classList.add('character__Skin-Color');
        characterPicture.classList.add('character__Picture');

    });
}