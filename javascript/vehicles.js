// asynch fetch
const fetchVehicles = async()=> {
    // promise all statement so I can get both starships and vehicles
        const [starshipsResponse, vehiclesResponse] = await Promise.all([
            fetch('https://swapi.dev/api/starships/'),
            fetch('https://swapi.dev/api/vehicles/')
        ]);
        const starshipsResult = await starshipsResponse.json();
        const vehiclesResult = await  vehiclesResponse.json();

        renderData(starshipsResult.results.concat(vehiclesResult.results));
} 

fetchVehicles();

function renderData(vehicles){
    const ul = document.querySelector('.main__container');
    document.body.appendChild(ul);

    vehicles.forEach(vehicle => {
        console.log(vehicle);
        // create elements
        const li = document.createElement('li'); 
        const vehicleName = document.createElement('span');
        const vehicleModel = document.createElement('span');
        const vehicleManufacturer = document.createElement('span');
        const vehicleLength = document.createElement('span');
        const vehicleCrew = document.createElement('span');
        const vehiclePassengers = document.createElement('span');
        const vehiclePicture = document.createElement('span');
        const vehicleImage = document.createElement('img');

        // append elements
        ul.append(li);
        li.appendChild(vehicleName);
        li.appendChild(vehicleModel);
        li.appendChild(vehicleManufacturer);
        li.appendChild(vehicleLength);
        li.appendChild(vehicleCrew);
        li.appendChild(vehiclePassengers);
        li.appendChild(vehiclePicture);

        // making content
        vehicleName.textContent = vehicle.name;
        vehicleModel.textContent = vehicle.model;
        vehicleManufacturer.textContent = vehicle.manufacturer;
        vehicleLength.textContent = vehicle.length;
        vehicleCrew.textContent = vehicle.crew;
        vehiclePassengers.textContent = vehicle.passengers;
        /* vehicleImage.src =  */

        // adding classes to elements
        li.classList.add('created__Li');
        vehicleName.classList.add('vehicle__Name');
        vehicleModel.classList.add('vehicle__Model');
        vehicleManufacturer.classList.add('vehicle__Manufacturer');
        vehicleLength.classList.add('vehicle__Size');
        vehicleCrew.classList.add('vehicle__Crew');
        vehiclePassengers.classList.add('vehicle__Passengers');
        vehicleImage.classList.add('vehicle__Image');

    });
}