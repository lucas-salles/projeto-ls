// Script usado no arquivo movie.html
import 'lightbox2/dist/js/lightbox'
import $ from 'jquery'
import { showMovie, showTV, baseURL, apiKey } from './lib.mjs'

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


// Para definir a altura mínima do main como sendo a altura da janela do dispositivo
const main = document.querySelector('main')
const height = window.innerHeight
main.style.cssText = `min-height: ${height-88}px;`




// Função para ler id passado na url e armazena-lo na variável id
function queryString(parameter) {  
    const loc = location.search.substring(1, location.search.length)
    var param_value = false
    const params = loc.split("&")
    for (let i=0; i<params.length;i++) {   
        let param_name = params[i].substring(0,params[i].indexOf('='))  
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value 
    }   
    else {   
        return undefined 
    }   
}

const id = queryString("id")




// Exibindo as informações do filme ou da série buscada pelo usuário
getMovie(id)


// Função que busca os dados do filme ou série a ser exibido com base no id
function getMovie(id) {
    const url = `${baseURL}find/${id}?api_key=${apiKey}&language=pt-BR&external_source=imdb_id`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            // Teste para saber se é um filme ou uma série
            if(json.movie_results.length != 0) {
                const movie = json.movie_results
                showMovie(movie)
            } else {
                const tv = json.tv_results
                showTV(tv)
            }
        })
}