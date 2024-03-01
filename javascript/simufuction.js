
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


// Assumptions:
//   1. Antenna is kept in free space and made of non-magnetic material.
//     - Intrin

counter = 0;

const c = 3*Math.pow(10, 8);
const mu = 4*Math.PI*Math.pow(10, -7);
const eps = 8.84*Math.pow(10, -12);

const I0 = 5;
const n = 120*Math.PI;
const eps_r = 1;

var f = 650*Math.pow(10, 6);
var theta = 90;
var r = 50;

// var wav = 0;
// var pow_rad = 0;
// var rad_res = 0;
// var H = 0;
// var E = 0;
// var rad_intensity = 0;


function freq(slideValue) {
  var sliderDiv = document.getElementById("freq");
  sliderDiv.innerHTML = slideValue + " mHz";
  f = slideValue;
  f = f*Math.pow(10, 6);
  // console.log(typeof(f));
  // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

function dist(slideValue) {
  var sliderDiv = document.getElementById("dist");
  sliderDiv.innerHTML = slideValue + " m";
  r = slideValue;
  // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

function angle(slideValue) {
  var sliderDiv = document.getElementById("theta");
  sliderDiv.innerHTML = slideValue + " ";
  theta = slideValue;
  // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

function solve(){

  counter += 1;

  
  
  var wav = c/f;
  var pow_rad = ((I0*I0)/2)*73;
  var rad_res = 73;

  var H = (I0/(2*Math.PI*r)) * ((Math.cos(Math.PI * Math.cos(theta*Math.PI/180)))/Math.sin(theta*Math.PI/180));
  var E = ((n*I0)/(2*Math.PI*r)) * ((Math.cos(Math.PI * Math.cos(theta*Math.PI/180)))/Math.sin(theta*Math.PI/180));

  var rad_intensity = ((r*r) * (E*E))/n;

  //console.log(wav, pow_rad, rad_res, H, E, rad_intensity);

  if (counter === 1){
    document.getElementById("freq1").innerHTML = Number(f/1000000);
    document.getElementById("dist1").innerHTML = r;
    document.getElementById("theta1").innerHTML = theta;
    document.getElementById("wav1").innerHTML = wav.toFixed(3);
    document.getElementById("pow_rad1").innerHTML = pow_rad;
    document.getElementById("rad_res1").innerHTML = rad_res;
    document.getElementById("mag1").innerHTML = H.toFixed(3);
    document.getElementById("elec1").innerHTML = E.toFixed(3); 
    document.getElementById("radint1").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 2){
    document.getElementById("freq2").innerHTML = Number(f/1000000);
    document.getElementById("dist2").innerHTML = r;
    document.getElementById("theta2").innerHTML = theta;
    document.getElementById("wav2").innerHTML = wav.toFixed(3);
    document.getElementById("pow_rad2").innerHTML = pow_rad;
    document.getElementById("rad_res2").innerHTML = rad_res;
    document.getElementById("mag2").innerHTML = H.toFixed(3);
    document.getElementById("elec2").innerHTML = E.toFixed(3); 
    document.getElementById("radint2").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 3){
    document.getElementById("freq3").innerHTML = Number(f/1000000);
    document.getElementById("dist3").innerHTML = r;
    document.getElementById("theta3").innerHTML = theta;
    document.getElementById("wav3").innerHTML = wav.toFixed(3);
    document.getElementById("pow_rad3").innerHTML = pow_rad;
    document.getElementById("rad_res3").innerHTML = rad_res;
    document.getElementById("mag3").innerHTML = H.toFixed(3);
    document.getElementById("elec3").innerHTML = E.toFixed(3); 
    document.getElementById("radint3").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 4){
    document.getElementById("freq4").innerHTML = Number(f/1000000);
    document.getElementById("dist4").innerHTML = r;
    document.getElementById("theta4").innerHTML = theta;
    document.getElementById("wav4").innerHTML = wav.toFixed(3);
    document.getElementById("pow_rad4").innerHTML = pow_rad;
    document.getElementById("rad_res4").innerHTML = rad_res;
    document.getElementById("mag4").innerHTML = H.toFixed(3);
    document.getElementById("elec4").innerHTML = E.toFixed(3); 
    document.getElementById("radint4").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 5){
    document.getElementById("freq5").innerHTML = Number(f/1000000);
    document.getElementById("dist5").innerHTML = r;
    document.getElementById("theta5").innerHTML = theta;
    document.getElementById("wav5").innerHTML = wav.toFixed(3);
    document.getElementById("pow_rad5").innerHTML = pow_rad;
    document.getElementById("rad_res5").innerHTML = rad_res;
    document.getElementById("mag5").innerHTML = H.toFixed(3);
    document.getElementById("elec5").innerHTML = E.toFixed(3); 
    document.getElementById("radint5").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter > 5){
    alert("Observation Table already filled!");
  }

}


// To Reset Connections
function reset() {
    window.location.reload();
    counter = 0;
}



/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)

  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
      toggle.addEventListener('click', ()=>{
          // show navbar
          nav.classList.toggle('show')
          // change icon
          toggle.classList.toggle('bx-x')
          // add padding to body
          bodypd.classList.toggle('body-pd')
          // add padding to header
          headerpd.classList.toggle('body-pd')
      })
  }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  if(linkColor){
      linkColor.forEach(l=> l.classList.remove('active'))
      this.classList.add('active')
  }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))