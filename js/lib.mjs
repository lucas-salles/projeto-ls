const baseURL = 'https://api.themoviedb.org/3/'
const apiKey = 'f3e9ac221453594577b84dc8f2923bb6'
const mainContent = document.querySelector('.main-content')
const main = document.querySelector('main')
const warningMessage = document.querySelector('.warning')
const movieContent = document.querySelector('.movie-content')


// Função para criar dinamicamente e exibir o conteúdo dos filmes mais populares
function showMoviePopularity(movies) {
    warningMessage.classList.add('hidden')
    mainContent.innerHTML = ''

    for(const movie of movies) {
        // Poster do filme
        const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

        const result = `<div class="movie filme" id="${movie.id}">
        <img src="${poster}" class="image">
        <p class="title">${movie.title}</p>
        </div>`
        
        mainContent.insertAdjacentHTML('beforeend', result)
    }
}


// Função para criar dinamicamente e exibir o conteúdo das séries mais populares
function showTVPopularity(tvs) {
    warningMessage.classList.add('hidden')
    mainContent.innerHTML = ''

    for(const tv of tvs) {
        // Poster da série
        const poster = `https://image.tmdb.org/t/p/w200${tv.poster_path}`

        const result = `<div class="tv filme" id="${tv.id}">
        <img src="${poster}" class="image">
        <p class="title">${tv.name}</p>
        </div>`
        
        mainContent.insertAdjacentHTML('beforeend', result)
    }
}




// FUNÇÕES REFERENTES AO CAMPO DE BUSCA NO index.html

// Função que exibe filmes e séries com base na busca feita
function showSearch(search) {
    mainContent.innerHTML = ''
    for(const content of search) {
        let unavailableImage = 'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível'
        let availableImage = `https://image.tmdb.org/t/p/w200${content.poster_path}`

        // Se o resultado encontrado for um filme:
        if(content.media_type == 'movie') {
            // Teste para saber se existe uma imagem disponível:
            const poster = content.poster_path != null ? availableImage : unavailableImage

            const movie = `<div class="${content.media_type} filme" id="${content.id}">
            <img src="${poster}" class="image">
            <p class="title">${content.title}</p>
            </div>`

            mainContent.insertAdjacentHTML('beforeend', movie)
        }
        // Se o resultado encontrado for uma série:
        else {
            // Teste para saber se existe uma imagem disponível:
            const poster = content.poster_path != null ? availableImage : unavailableImage

            const tv = `<div class="${content.media_type} filme" id="${content.id}">
            <img src="${poster}" class="image">
            <p class="title">${content.name}</p>
            </div>`

            mainContent.insertAdjacentHTML('beforeend', tv)
        }
    }
}

// Função para mostrar mensagem de erro quando resultados não são encontrados
function showWarningMessage() {
    mainContent.innerHTML = ''
    warningMessage.classList.remove('hidden')

    // Para definir a altura mínima do main como sendo a altura da janela do dispositivo
    const height = window.innerHeight
    main.style.cssText = `min-height: ${height-88}px;`
}




// FUNÇÕES REFERENTES AO ARQUIVO movie.mjs

// Função para criar dinamicamente e exibir o conteúdo do filme
function showMovie(movie) {
    console.log(movie)
    for(const content of movie) {
        // Ano de lançamento do filme
        const release = content.release_date.split('-')[0]
        // Poster do filme
        const poster = `https://image.tmdb.org/t/p/w200${content.poster_path}`
        // Imagens que aparecem quando o poster do filme é clicado
        const img1 = `https://image.tmdb.org/t/p/w500${content.backdrop_path}`
        const img2 = `https://image.tmdb.org/t/p/w500${content.poster_path}`

        const movie = `<div class="movie">
            <h1>${content.title} <span>(${release})</span></h1>
            <a href="${img1}" data-lightbox="${content.title}" data-title="${content.title}">
                <img src="${poster}">
            </a>
            <a href="${img2}" data-lightbox="${content.title}" data-title="${content.title}" class="hidden"></a>
            <div class="details">
                <h2>Sinopse</h2>
                <p>${content.overview}</p>
                <div class="statistic">
                    <div class="vote">
                        <div class="vote-average">Nota: ${content.vote_average}</div>
                        <div class="vote-bar-value">
                            <div class="vote-bar">
                                <div class="vote-value" style="width: ${content.vote_average.toString().replace('.', '')}%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="popularity">Popularidade: ${content.popularity}</div>
                </div>
            </div>
        </div>`
        
        movieContent.innerHTML = movie
    }
}

// Função para criar dinamicamente e exibir o conteúdo da série
function showTV(tv) {
    for(const content of tv) {
        // Ano de lançamento da série
        const release = content.first_air_date.split('-')[0]
        // Poster da série
        const poster = `https://image.tmdb.org/t/p/w200${content.poster_path}`
        // Imagens que aparecem quando o poser da série é clicado
        const img1 = `https://image.tmdb.org/t/p/w500${content.backdrop_path}`
        const img2 = `https://image.tmdb.org/t/p/w500${content.poster_path}`

        const tv = `<div class="tv">
            <h1>${content.name} <span>(${release})</span></h1>
            <a href="${img1}" data-lightbox="${content.name}" data-title="${content.name}">
                <img src="${poster}">
            </a>
            <a href="${img2}" data-lightbox="${content.name}" data-title="${content.name}" class="hidden"></a>
            <div class="details">
                <h2>Sinopse</h2>
                <p>${content.overview}</p>
                <div class="statistic">
                    <div class="vote">
                        <div class="vote-average">Nota: ${content.vote_average}</div>
                        <div class="vote-bar-value">
                            <div class="vote-bar">
                                <div class="vote-value" style="width: ${content.vote_average.toString().replace('.', '')}%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="popularity">Popularidade: ${content.popularity}</div>
                </div>
            </div>
        </div>`

        movieContent.innerHTML = tv
    }
}

export { showMoviePopularity, showTVPopularity, showSearch, showWarningMessage, showMovie, showTV, baseURL, apiKey, warningMessage }