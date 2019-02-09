/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lib.mjs":
/*!********************!*\
  !*** ./js/lib.mjs ***!
  \********************/
/*! exports provided: showMoviePopularity, showTVPopularity, showSearch, showWarningMessage, showMovie, showTV, baseURL, apiKey, warningMessage */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMoviePopularity\", function() { return showMoviePopularity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTVPopularity\", function() { return showTVPopularity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSearch\", function() { return showSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showWarningMessage\", function() { return showWarningMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMovie\", function() { return showMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTV\", function() { return showTV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseURL\", function() { return baseURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiKey\", function() { return apiKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warningMessage\", function() { return warningMessage; });\nconst baseURL = 'https://api.themoviedb.org/3/'\r\nconst apiKey = 'f3e9ac221453594577b84dc8f2923bb6'\r\nconst mainContent = document.querySelector('.main-content')\r\nconst main = document.querySelector('main')\r\nconst warningMessage = document.querySelector('.warning')\r\nconst movieContent = document.querySelector('.movie-content')\r\n\r\n\r\n// Função para criar dinamicamente e exibir o conteúdo dos filmes mais populares\r\nfunction showMoviePopularity(movies) {\r\n    warningMessage.classList.add('hidden')\r\n    mainContent.innerHTML = ''\r\n\r\n    for(const movie of movies) {\r\n        // Poster do filme\r\n        const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`\r\n\r\n        const result = `<div class=\"movie filme\" id=\"${movie.id}\">\r\n        <img src=\"${poster}\" class=\"image\">\r\n        <p class=\"title\">${movie.title}</p>\r\n        </div>`\r\n        \r\n        mainContent.insertAdjacentHTML('beforeend', result)\r\n    }\r\n}\r\n\r\n\r\n// Função para criar dinamicamente e exibir o conteúdo das séries mais populares\r\nfunction showTVPopularity(tvs) {\r\n    warningMessage.classList.add('hidden')\r\n    mainContent.innerHTML = ''\r\n\r\n    for(const tv of tvs) {\r\n        // Poster da série\r\n        const poster = `https://image.tmdb.org/t/p/w200${tv.poster_path}`\r\n\r\n        const result = `<div class=\"tv filme\" id=\"${tv.id}\">\r\n        <img src=\"${poster}\" class=\"image\">\r\n        <p class=\"title\">${tv.name}</p>\r\n        </div>`\r\n        \r\n        mainContent.insertAdjacentHTML('beforeend', result)\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n// FUNÇÕES REFERENTES AO CAMPO DE BUSCA NO index.html\r\n\r\n// Função que exibe filmes e séries com base na busca feita\r\nfunction showSearch(search) {\r\n    mainContent.innerHTML = ''\r\n    for(const content of search) {\r\n        let unavailableImage = 'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível'\r\n        let availableImage = `https://image.tmdb.org/t/p/w200${content.poster_path}`\r\n\r\n        // Se o resultado encontrado for um filme:\r\n        if(content.media_type == 'movie') {\r\n            // Teste para saber se existe uma imagem disponível:\r\n            const poster = content.poster_path != null ? availableImage : unavailableImage\r\n\r\n            const movie = `<div class=\"${content.media_type} filme\" id=\"${content.id}\">\r\n            <img src=\"${poster}\" class=\"image\">\r\n            <p class=\"title\">${content.title}</p>\r\n            </div>`\r\n\r\n            mainContent.insertAdjacentHTML('beforeend', movie)\r\n        }\r\n        // Se o resultado encontrado for uma série:\r\n        else {\r\n            // Teste para saber se existe uma imagem disponível:\r\n            const poster = content.poster_path != null ? availableImage : unavailableImage\r\n\r\n            const tv = `<div class=\"${content.media_type} filme\" id=\"${content.id}\">\r\n            <img src=\"${poster}\" class=\"image\">\r\n            <p class=\"title\">${content.name}</p>\r\n            </div>`\r\n\r\n            mainContent.insertAdjacentHTML('beforeend', tv)\r\n        }\r\n    }\r\n}\r\n\r\n// Função para mostrar mensagem de erro quando resultados não são encontrados\r\nfunction showWarningMessage() {\r\n    mainContent.innerHTML = ''\r\n    warningMessage.classList.remove('hidden')\r\n\r\n    // Para definir a altura mínima do main como sendo a altura da janela do dispositivo\r\n    const height = window.innerHeight\r\n    main.style.cssText = `min-height: ${height-88}px;`\r\n}\r\n\r\n\r\n\r\n\r\n// FUNÇÕES REFERENTES AO ARQUIVO movie.mjs\r\n\r\n// Função para criar dinamicamente e exibir o conteúdo do filme\r\nfunction showMovie(movie) {\r\n    console.log(movie)\r\n    for(const content of movie) {\r\n        // Ano de lançamento do filme\r\n        const release = content.release_date.split('-')[0]\r\n        // Poster do filme\r\n        const poster = `https://image.tmdb.org/t/p/w200${content.poster_path}`\r\n        // Imagens que aparecem quando o poster do filme é clicado\r\n        const img1 = `https://image.tmdb.org/t/p/w500${content.backdrop_path}`\r\n        const img2 = `https://image.tmdb.org/t/p/w500${content.poster_path}`\r\n\r\n        const movie = `<div class=\"movie\">\r\n            <h1>${content.title} <span>(${release})</span></h1>\r\n            <a href=\"${img1}\" data-lightbox=\"${content.title}\" data-title=\"${content.title}\">\r\n                <img src=\"${poster}\">\r\n            </a>\r\n            <a href=\"${img2}\" data-lightbox=\"${content.title}\" data-title=\"${content.title}\" class=\"hidden\"></a>\r\n            <div class=\"details\">\r\n                <h2>Sinopse</h2>\r\n                <p>${content.overview}</p>\r\n                <div class=\"statistic\">\r\n                    <div class=\"vote\">\r\n                        <div class=\"vote-average\">Nota: ${content.vote_average}</div>\r\n                        <div class=\"vote-bar-value\">\r\n                            <div class=\"vote-bar\">\r\n                                <div class=\"vote-value\" style=\"width: ${content.vote_average.toString().replace('.', '')}%;\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"popularity\">Popularidade: ${content.popularity}</div>\r\n                </div>\r\n            </div>\r\n        </div>`\r\n        \r\n        movieContent.innerHTML = movie\r\n    }\r\n}\r\n\r\n// Função para criar dinamicamente e exibir o conteúdo da série\r\nfunction showTV(tv) {\r\n    for(const content of tv) {\r\n        // Ano de lançamento da série\r\n        const release = content.first_air_date.split('-')[0]\r\n        // Poster da série\r\n        const poster = `https://image.tmdb.org/t/p/w200${content.poster_path}`\r\n        // Imagens que aparecem quando o poser da série é clicado\r\n        const img1 = `https://image.tmdb.org/t/p/w500${content.backdrop_path}`\r\n        const img2 = `https://image.tmdb.org/t/p/w500${content.poster_path}`\r\n\r\n        const tv = `<div class=\"tv\">\r\n            <h1>${content.name} <span>(${release})</span></h1>\r\n            <a href=\"${img1}\" data-lightbox=\"${content.name}\" data-title=\"${content.name}\">\r\n                <img src=\"${poster}\">\r\n            </a>\r\n            <a href=\"${img2}\" data-lightbox=\"${content.name}\" data-title=\"${content.name}\" class=\"hidden\"></a>\r\n            <div class=\"details\">\r\n                <h2>Sinopse</h2>\r\n                <p>${content.overview}</p>\r\n                <div class=\"statistic\">\r\n                    <div class=\"vote\">\r\n                        <div class=\"vote-average\">Nota: ${content.vote_average}</div>\r\n                        <div class=\"vote-bar-value\">\r\n                            <div class=\"vote-bar\">\r\n                                <div class=\"vote-value\" style=\"width: ${content.vote_average.toString().replace('.', '')}%;\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"popularity\">Popularidade: ${content.popularity}</div>\r\n                </div>\r\n            </div>\r\n        </div>`\r\n\r\n        movieContent.innerHTML = tv\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/lib.mjs?");

/***/ }),

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.mjs */ \"./js/lib.mjs\");\n\r\n\r\nconst filmes = document.getElementById('filmes')\r\nconst series = document.getElementById('series')\r\n\r\n// Gerando o conteúdo inicial da página\r\ngetMoviePopularity()\r\n\r\n\r\n// Eventos de clique no menu de navegação de filmes e séries que fica no main\r\n// Ao clicar em \"filmes\" o nome fica verde mostrando que está ativo e o nome \"séries\" fica branco\r\nfilmes.addEventListener('click', () => {\r\n    filmes.classList.remove('hidden-color')\r\n    filmes.classList.add('active')\r\n\r\n    series.classList.remove('active')\r\n    series.classList.add('hidden-color')\r\n\r\n    // Gerando e exibindo o conteúdo dos filmes mais populares\r\n    getMoviePopularity()\r\n})\r\n// Ao clicar em \"séries\" o nome fica verde mostrando que está ativo e o nome \"filmes\" fica branco\r\nseries.addEventListener('click', () => {\r\n    series.classList.remove('hidden-color')\r\n    series.classList.add('active')\r\n\r\n    filmes.classList.remove('active')\r\n    filmes.classList.add('hidden-color')\r\n\r\n    // Gerando e exibindo o conteúdo das séries mais populares\r\n    getTVPopularity()\r\n})\r\n\r\n\r\n\r\n// Função para buscar os dados dos filmes mais populares\r\nfunction getMoviePopularity() {\r\n    filmes.classList.remove('hidden-color')\r\n    filmes.classList.add('active')\r\n    series.classList.remove('active')\r\n    series.classList.add('hidden-color')\r\n    const url = `${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"baseURL\"]}discover/movie?api_key=${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}&language=pt-BR&sort_by=popularity.desc`\r\n    fetch(url)\r\n    .then(res => res.json())\r\n    .then(json => {\r\n        const movies = json.results\r\n        Object(_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"showMoviePopularity\"])(movies)\r\n    })\r\n}\r\n\r\n// Função para buscar os dados das séries mais populares\r\nfunction getTVPopularity() {\r\n    series.classList.remove('hidden-color')\r\n    series.classList.add('active')\r\n    filmes.classList.remove('active')\r\n    filmes.classList.add('hidden-color')\r\n    const url = `${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"baseURL\"]}discover/tv?api_key=${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}&language=pt-BR&sort_by=popularity.desc`\r\n    fetch(url)\r\n        .then(res => res.json())\r\n        .then(json => {\r\n            const tvs = json.results\r\n            Object(_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"showTVPopularity\"])(tvs)\r\n        })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst search = document.querySelector('input[name=search]')\r\nconst btn = document.querySelector('button')\r\n// Evento para capturar a string no campo de busca ao clicar no botão\r\nbtn.addEventListener('click', (event) => {\r\n    event.preventDefault()\r\n\r\n    getSearch(search.value.replace(/\\s/g, '-'))\r\n\r\n    search.value = ''\r\n    search.blur()\r\n})\r\n\r\n// Função para buscar os dados de filmes e séries com a correspondência mais próxima à string passada no campo de busca\r\nfunction getSearch(search) {\r\n    const url = `${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"baseURL\"]}search/multi?api_key=${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}&language=pt-BR&query=${search}`\r\n    fetch(url)\r\n        .then(res => res.json())\r\n        .then(json => {\r\n            // Quando se tem resultados é chamada a função showSearch() para exibir o conteúdo\r\n            if(json.total_results != 0) {\r\n                _lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"warningMessage\"].classList.add('hidden')\r\n\r\n                Object(_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"showSearch\"])(json.results)\r\n            }\r\n            // Quando não se tem resultados é chamada a função erro() que exibe uma mensagem de erro\r\n            else {\r\n                Object(_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"showWarningMessage\"])()\r\n            }\r\n        })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Script em JQuery para pegar o valor de elementos criados dinamicamente\r\n$(document).on('click', '.title', takeId)\r\n$(document).on('click', '.image', takeId)\r\n\r\n\r\n// Navegando até o elemento pai de .title ou .image, que no caso é a div com a classe .filme, para pegar o seu id\r\nfunction takeId() {\r\n    const tmdbId = this.parentNode.id\r\n\r\n    // Criando um array da classList da div .filme e pegando o índice 0 que diz se é um filme ou uma série\r\n    const mediaType = this.parentNode.classList.value.split(' ')[0]\r\n\r\n    getImdbId(tmdbId, mediaType)\r\n}\r\n\r\n// Com o id do filme ou da série no imdb é possível fazer uma busca em específico por esse título e assim gerar o seu conteúdo.\r\n// Função que faz uma busca usando o id do filme ou série no tmdb(API utilizada) para descobrir o seu id no imdb\r\nfunction getImdbId(tmdbId, mediaType) {\r\n    // Teste para saber se é um filme ou uma série\r\n    if (mediaType == 'movie') {\r\n        const url = `${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"baseURL\"]}movie/${tmdbId}/external_ids?api_key=${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}`\r\n        fetch(url)\r\n            .then(res => res.json())\r\n            .then(json => {\r\n                runMovie(json.imdb_id)\r\n            })\r\n    } else {\r\n        const url = `${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"baseURL\"]}tv/${tmdbId}/external_ids?api_key=${_lib_mjs__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"]}&language=pt-BR`\r\n        fetch(url)\r\n            .then(res => res.json())\r\n            .then(json => {\r\n                runMovie(json.imdb_id)\r\n            })\r\n    }\r\n}\r\n\r\n// Função que abre a página movie.html em outra aba do browser e passa o id do filme através da url\r\nfunction runMovie(valor) {\r\n    window.location = \"pages/movie.html?id=\"+valor\r\n}\n\n//# sourceURL=webpack:///./js/main.mjs?");

/***/ })

/******/ });