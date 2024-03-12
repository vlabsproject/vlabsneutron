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

var distances = [];
var mag = [];
var elec = [];

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
  sliderDiv.innerHTML = slideValue + " &#8486";
  theta = slideValue;
  // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

console.log();

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
    document.getElementById("freq2_1").innerHTML = Number(f/1000000);
    document.getElementById("dist2_1").innerHTML = r;
    document.getElementById("mag2_1").innerHTML = H.toFixed(3);
    document.getElementById("elec2_1").innerHTML = E.toFixed(3); 
    // document.getElementById("radint2_1").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 2){
    document.getElementById("freq2_2").innerHTML = Number(f/1000000);
    document.getElementById("dist2_2").innerHTML = r;

    document.getElementById("mag2_2").innerHTML = H.toFixed(3);
    document.getElementById("elec2_2").innerHTML = E.toFixed(3); 
    // document.getElementById("radint2_2").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 3){
    document.getElementById("freq2_3").innerHTML = Number(f/1000000);
    document.getElementById("dist2_3").innerHTML = r;

    document.getElementById("mag2_3").innerHTML = H.toFixed(3);
    document.getElementById("elec2_3").innerHTML = E.toFixed(3); 
    // document.getElementById("radint2_3").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 4){
    document.getElementById("freq2_4").innerHTML = Number(f/1000000);
    document.getElementById("dist2_4").innerHTML = r;

    document.getElementById("mag2_4").innerHTML = H.toFixed(3);
    document.getElementById("elec2_4").innerHTML = E.toFixed(3); 
    // document.getElementById("radint2_4").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter === 5){
    document.getElementById("freq2_5").innerHTML = Number(f/1000000);
    document.getElementById("dist2_5").innerHTML = r;

    document.getElementById("mag2_5").innerHTML = H.toFixed(3);
    document.getElementById("elec2_5").innerHTML = E.toFixed(3); 
    // document.getElementById("radint2_5").innerHTML = rad_intensity.toFixed(3); 
  }

  if (counter > 5){
    alert("Observation Table already filled!");
  }
  distances.push(r);
  mag.push(H);
  elec.push(E);


console.log("clicked");


}


// To Reset Connections
function reset() {
    window.location.reload();
    counter = 0;
}



function plot(){

  var x = document.getElementById("mag");
  x.style.display = "block";
  var y = document.getElementById("elec");
  y.style.display = "block";
  
  new Chart("myChartMag", {
    type: "line",
    data: {
      labels: distances,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: mag
      }
    ]
    },
    options: {
      legend: {display: false},
      // scales: {
      //   yAxes: [{ticks: {min: 0.008, max:0.8}}],
      // }
    }
  });

  new Chart("myChartElec", {
    type: "line",
    data: {
      labels: distances,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: elec
      }
    ]
    },
    options: {
      legend: {display: false},
      // scales: {
      //   yAxes: [{ticks: {min: 0.008, max:0.8}}],
      // }
    }
  });

  // console.log(distances);
  // console.log(mag);
  // console.log(elec);
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
