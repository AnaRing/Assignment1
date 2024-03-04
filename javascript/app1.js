// asynch fetch
const fetchMovies = async()=> {
    const response = await fetch('https://swapi.dev/api/films/');
    const result = await response.json();
    renderData(result.results);
}  

fetchMovies();

function renderData(movies){
    // sorting movies on episode id
    movies.sort((a, b) => a.episode_id - b.episode_id);
    const ul = document.querySelector('.main__container');
    document.body.appendChild(ul);

    movies.forEach(movie => {
        console.log(movie);
        // create elements
        const li = document.createElement('li'); 
        const movieTitle = document.createElement('span');
        const movieEpisode = document.createElement('span');
        const movieDirector = document.createElement('span');
        const movieProducer = document.createElement('span');
        const movieRelease = document.createElement('span');
        const movieCover = document.createElement('span');
        const movieImage = document.createElement('img');

        // append elements
        ul.append(li);
        li.appendChild(movieTitle);
        li.appendChild(movieEpisode);
        li.appendChild(movieDirector);
        li.appendChild(movieProducer);
        li.appendChild(movieRelease);
        li.appendChild(movieCover);

        // making content
        movieTitle.textContent = movie.title;
        movieEpisode.textContent = movie.episode_id;
        movieDirector.textContent = movie.director;
        movieProducer.textContent = movie.producer;
        movieRelease.textContent = movie.release_date;
        /* movieCover.src =  */

        // adding classes to elements
        li.classList.add('created__Li');
        movieTitle.classList.add('movie__Title');
        movieEpisode.classList.add('movie__Episode');
        movieDirector.classList.add('movie__Director');
        movieProducer.classList.add('movie__Producer');
        movieRelease.classList.add('movie__Release-date');
        movieCover.classList.add('movie__Cover');

    });
}