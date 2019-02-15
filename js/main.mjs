import $ from 'jquery'
import 'jquery'
import 'bootstrap'
import 'popper.js'
import 'bootstrap/js/dist/tooltip'
import { showMoviePopularity, showTVPopularity, showSearch, showWarningMessage, baseURL, apiKey, warningMessage } from './lib.mjs'

// Tooltip do bootstrap
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Menu mobile
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    })
})

// Loading enquanto a página é carregada
$(document).ready(function () {
    $('#load').css('display','none');
})


const filmes = document.getElementById('filmes')
const series = document.getElementById('series')

// Gerando o conteúdo inicial da página
getMoviePopularity()


// Eventos de clique no menu de navegação de filmes e séries que fica no main
// Ao clicar em "filmes" o nome fica verde mostrando que está ativo e o nome "séries" fica branco
filmes.addEventListener('click', () => {
    filmes.classList.remove('hidden-color')
    filmes.classList.add('active')

    series.classList.remove('active')
    series.classList.add('hidden-color')

    // Gerando e exibindo o conteúdo dos filmes mais populares
    getMoviePopularity()
})
// Ao clicar em "séries" o nome fica verde mostrando que está ativo e o nome "filmes" fica branco
series.addEventListener('click', () => {
    series.classList.remove('hidden-color')
    series.classList.add('active')

    filmes.classList.remove('active')
    filmes.classList.add('hidden-color')

    // Gerando e exibindo o conteúdo das séries mais populares
    getTVPopularity()
})



// Função para buscar os dados dos filmes mais populares
function getMoviePopularity() {
    filmes.classList.remove('hidden-color')
    filmes.classList.add('active')
    series.classList.remove('active')
    series.classList.add('hidden-color')
    const url = `${baseURL}discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            const movies = json.results
            showMoviePopularity(movies)
        })
}

// Função para buscar os dados das séries mais populares
function getTVPopularity() {
    series.classList.remove('hidden-color')
    series.classList.add('active')
    filmes.classList.remove('active')
    filmes.classList.add('hidden-color')
    const url = `${baseURL}discover/tv?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            const tvs = json.results
            showTVPopularity(tvs)
        })
}








const search = document.querySelector('input[name=search]')
const btn = document.querySelector('button')
// Evento para capturar a string no campo de busca ao clicar no botão
btn.addEventListener('click', (event) => {
    event.preventDefault()

    getSearch(search.value.replace(/\s/g, '-'))

    search.value = ''
    search.blur()
})

// Função para buscar os dados de filmes e séries com a correspondência mais próxima à string passada no campo de busca
function getSearch(search) {
    const url = `${baseURL}search/multi?api_key=${apiKey}&language=pt-BR&query=${search}`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            // Quando se tem resultados é chamada a função showSearch() para exibir o conteúdo
            if (json.total_results != 0) {
                warningMessage.classList.add('hidden')

                showSearch(json.results)
            }
            // Quando não se tem resultados é chamada a função erro() que exibe uma mensagem de erro
            else {
                showWarningMessage()
            }
        })
}






// Script em JQuery para pegar o valor de elementos criados dinamicamente
$(document).on('click', '.title', takeId)
$(document).on('click', '.image', takeId)


// Navegando até o elemento pai de .title ou .image, que no caso é a div com a classe .filme, para pegar o seu id
function takeId() {
    const tmdbId = this.parentNode.id

    // Criando um array da classList da div .filme e pegando o índice 0 que diz se é um filme ou uma série
    const mediaType = this.parentNode.classList.value.split(' ')[0]

    getImdbId(tmdbId, mediaType)
}

// Com o id do filme ou da série no imdb é possível fazer uma busca em específico por esse título e assim gerar o seu conteúdo.
// Função que faz uma busca usando o id do filme ou série no tmdb(API utilizada) para descobrir o seu id no imdb
function getImdbId(tmdbId, mediaType) {
    // Teste para saber se é um filme ou uma série
    if (mediaType == 'movie') {
        const url = `${baseURL}movie/${tmdbId}/external_ids?api_key=${apiKey}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                runMovie(json.imdb_id)
            })
    } else {
        const url = `${baseURL}tv/${tmdbId}/external_ids?api_key=${apiKey}&language=pt-BR`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                runMovie(json.imdb_id)
            })
    }
}

// Função que abre a página movie.html em outra aba do browser e passa o id do filme através da url
function runMovie(valor) {
    window.location = "pages/movie.html?id=" + valor
}