// asynch fetch
const fetchPlanets = async()=> {
    const response = await fetch('https://swapi.dev/api/planets/');
    const result = await response.json();
    renderData(result.results);
}  

fetchPlanets();

function renderData(planets){
    const ul = document.querySelector('.main__container');
    document.body.appendChild(ul);

    planets.forEach(planet => {
        console.log(planet);
        // create elements
        const li = document.createElement('li'); 
        const planetName = document.createElement('span');
        const planetOrbit = document.createElement('span');
        const planetSize = document.createElement('span');
        const planetClimate = document.createElement('span');
        const planetTerrain = document.createElement('span');
        const planetPicture = document.createElement('span');
        const planetImage = document.createElement('img');

        // append elements
        ul.append(li);
        li.appendChild(planetName);
        li.appendChild(planetOrbit);
        li.appendChild(planetSize);
        li.appendChild(planetClimate);
        li.appendChild(planetTerrain);
        li.appendChild(planetPicture);

        // making content
        planetName.textContent = planet.name;
        planetOrbit.textContent = planet.orbital_period;
        planetSize.textContent = planet.diameter;
        planetClimate.textContent = planet.climate;
        planetTerrain.textContent = planet.terrain;
        /* planetImage.src =  */

        // adding classes to elements
        li.classList.add('created__Li');
        planetName.classList.add('planet__Name');
        planetOrbit.classList.add('planet__Orbit');
        planetSize.classList.add('planet__Size');
        planetClimate.classList.add('planet__Climate');
        planetTerrain.classList.add('planet__Terrain');
        planetImage.classList.add('planet__Image');

    });
}