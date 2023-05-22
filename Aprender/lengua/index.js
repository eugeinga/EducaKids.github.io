//Funcion para Mostrar o ocultar el Nav

//function mostrarMenu() {
//  let botonMenu = document.querySelector('#boton-menu');
//  let nav = document.querySelector('nav');
//  nav.style.left = nav.style.left === '-450px' ? '0' : '-450px';
//  localStorage.setItem('menuOpen', nav.style.left === '0' ? 'true' : 'false');
//}



///Creacion de Variables

var video = document.querySelector('#video');
var detalle = document.querySelector('#detalle');

//// funciones
function uno() {
    fetch('videos/uno.txt')
        .then(data => data.text())
        .then(data => {
            video.innerHTML = `${data}`
        })
    
        fetch('videos/unoD.txt')
        .then(data => data.text())
        .then(data => {
            detalle.innerHTML = `${data}`
        })
}

///
function dos() {
  fetch('videos/dos.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/dosD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function tres() {
  fetch('videos/tres.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/tresD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function cuatro() {
  fetch('videos/cuatro.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/cuatroD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function cinco() {
  fetch('videos/cinco.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/cincoD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function seis() {
  fetch('videos/seistxt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/seisD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function siete() {
  fetch('videos/siete.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/sieteD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function ocho() {
  fetch('videos/ocho.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/ochoD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function nueve() {
  fetch('videos/nueve.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/nueveD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function diez() {
  fetch('videos/diez.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/diezD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///