var culoareInchisa = "#6A0888";
var culoareDeschisa = "#FF5733";

var culoareCurenta = culoareInchisa;

window.addEventListener("deviceorientation", on_device_orientation, false);

function on_device_orientation(evt) {
  var gamma = evt.gamma;
  document.getElementById("c").innerHTML = "Gamma = " + gamma;

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var centru = { x: canvas.width / 2, y: canvas.height / 2 };
  var latura_patrat = 50;
  var lungime_latura = latura_patrat + gamma;

  if (gamma > 10) {
    culoareCurenta = culoareDeschisa;
  } else if (gamma < -10) {
    culoareCurenta = culoareInchisa;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = culoareCurenta;
  context.beginPath();
  context.fillRect(
    centru.x - lungime_latura / 2,
    centru.y - lungime_latura / 2,
    lungime_latura,
    lungime_latura
  );
}
