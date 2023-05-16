///Creacion de Variables

var lectura = document.querySelector('#lectura');

/////////////// Videos


function VideoUno() {
  fetch('libreria/VideoUno.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoDos() {
  fetch('libreria/VideoDos.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoTres() {
  fetch('libreria/VideoTres.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoCuatro() {
  fetch('libreria/VideoCuatro.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoCinco() {
  fetch('libreria/VideoCinco.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoSeis() {
  fetch('libreria/VideoSeis.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoSiete() {
  fetch('libreria/VideoSiete.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoOcho() {
  fetch('libreria/VideoOcho.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoNueve() {
  fetch('libreria/VideoNueve.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoDiez() {
  fetch('libreria/VideoDiez.html')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}