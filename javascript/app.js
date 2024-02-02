/* const ul = document.querySelector('ul');

const fetchUsers = async () => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => console.log(data))
} */



/* const ul = document.querySelector('ul');

const fetchInfo = async () => {
    const response = await fetch('https://swapi.dev/api/people/')
    const result = await response.json();
    renderData(result.data);
}

fetchInfo()

function renderData(info){
    info.forEach((people) => {
        // creating the elements
        const li = document.createElement('li');
        const characterName = document.createElement('span');
        const characterGender = document.createElement('span');
        const characterSpecies = document.createElement('span');
        const characterHair = document.createElement('span');
        const characterEyes = document.createElement('span');
        const characterFilms = document.createElement('span');
        const characterImage = document.createElement('img');

        // adding class
        li.classList.add('characterItem');
        characterName.classList.add('character-name');
        characterGender.classList.add('character-gender');
        characterSpecies.classList.add('character-species');
        characterHair.classList.add('character-hair');
        characterEyes.classList.add('character-eyes');
        characterFilms.classList.add('character-films');
        characterImage.classList.add('character-image');

        // appending elements
        ul.append(li);
        li.append(characterName, characterGender, characterSpecies, characterHair, characterEyes, characterFilms, characterImage);
        characterImage.append(image);

        // adding context

        characterName.textContent = people.name;
        characterGender.textContent = people.gender;
        characterSpecies.textContent = people.species;
        characterHair.textContent = people.hair_color;
        characterEyes.textContent = people.eye_color;
        characterFilms.textContent = people.films;
         characterImage.src =  */
        
     // }); } 