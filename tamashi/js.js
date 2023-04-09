var ricxvi = 0;
var momatebuli = 1;
var fasi1 = 10;
var fasi2 = 10;
var fasi3 = 100;
var tyemali = 0;
var sicives_kliki = 0;
var yidvis_feri = document.getElementById('knopka1')
var yidvis_feri_1 = document.getElementById('knopka2')
var yidvis_feri_2 = document.getElementById('knopka3')
var mtavari_knopka= document.getElementById('damateba')



function damateba()
{
    ricxvi= ricxvi + momatebuli;
    document.getElementById('qula').innerHTML = ricxvi;
}

function momateba()
{
    if (ricxvi >= fasi1) {
        ricxvi = ricxvi - fasi1;
        fasi1= fasi1 +10;
        momatebuli++;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi1').innerHTML = fasi1;
    } 
}





function sicive_yidva()
{
    if (ricxvi >= fasi2) {
        ricxvi = ricxvi - fasi2;
        fasi2 = fasi2 + 10;
        sicives_kliki++;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi2').innerHTML = fasi2;
    }
}

function sicive_kliki(){
    ricxvi = ricxvi + sicives_kliki;
    document.getElementById('qula').innerHTML = ricxvi;
    if (sicives_kliki > 0){
        mtavari_knopka.classList.add("vibrate");
  // Remove "vibrate" class from the button after 0.2 seconds
  setTimeout(function vibracia() {
    mtavari_knopka.classList.remove("vibrate");
  }, 200);

    }
}

function ferebi() {

    if (ricxvi >= fasi1) {
        yidvis_feri.style.backgroundColor = "yellow";
      } else {
        yidvis_feri.style.backgroundColor = "gray";
      } 
    
      if (ricxvi >= fasi2) {
        yidvis_feri_1.style.backgroundColor = "yellow";
      } else {
        yidvis_feri_1.style.backgroundColor = "gray";
      }

      if (ricxvi >= fasi3) {
        yidvis_feri_2.style.backgroundColor = "yellow";
      } else {
        yidvis_feri_2.style.backgroundColor = "gray";
      }
      
      if (ricxvi < fasi3) {
        // call the function again after a delay, to avoid infinite recursion
        setTimeout(ferebi, 100);
      }
}


mtavari_knopka.addEventListener("click", function vibracia() {
  // Add "vibrate" class to the button
  mtavari_knopka.classList.add("vibrate");

  // Remove "vibrate" class from the button after 0.2 seconds
  setTimeout(function vibracia() {
    mtavari_knopka.classList.remove("vibrate");
  }, 200);
});



function tyemali_yidva() {
    if (ricxvi >= fasi3){
        ricxvi = ricxvi - fasi3;
        fasi3 = fasi3 + 100;
        tyemali= tyemali + 5;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi3').innerHTML = fasi3;
    }
}

function tyemali_mushaoba() {
    ricxvi = ricxvi + tyemali;
    document.getElementById('qula').innerHTML = ricxvi;
}

setInterval(sicive_kliki, 1000)
setInterval(tyemali_mushaoba, 1000)