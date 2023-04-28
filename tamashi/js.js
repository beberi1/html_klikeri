var ricxvi = 0;
var ricxvib = 0;
var momatebulib = 1;
var momatebuli = 1;
var fasi1 = 10;
var fasi2 = 10;
var fasi3 = 100;
var fasi4 = 300;
var tyemali = 0;
var ajika = 0;
var sicives_kliki = 0;
var yidvis_feri = document.getElementById('knopka1');
var yidvis_feri_1 = document.getElementById('knopka2');
var yidvis_feri_2 = document.getElementById('knopka3');
var mtavari_knopka= document.getElementById('damateba');
var bonus_gamochena = document.getElementById('bonusebi');
var mtavari_gverdi = document.getElementById('mtavari');
var b1 = document.getElementById('b1');

var bonus_tvla  = 0;
var mtavari_knopka_shecvla = document.getElementById('klikis_adgili');
var gadzliereba = new Audio('xmebi/gadzliereba.wav');
var sicive_xma = new Audio('xmebi/kankali.mp3');
var tyemlis_xma = new Audio('xmebi/tyemlis_kbecha.wav');
var ajika_xma = new Audio('xmebi/ajika.mp3')




function damateba()
{
    ricxvi= ricxvi + momatebuli;
    ricxvib = ricxvib + momatebulib;
    document.getElementById('qula').innerHTML = ricxvi;
    document.getElementById('qulab').innerHTML = ricxvib;
}

function momateba()
{
    if (ricxvi >= fasi1) {
        ricxvi = ricxvi - fasi1;
        fasi1= fasi1 +10;
        momatebuli++;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi1').innerHTML = fasi1;
        gadzliereba.play();
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
        sicive_xma.play();
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

// function ferebi() {

//     if (ricxvi >= fasi1) {
//         yidvis_feri.style.backgroundColor = "yellow";
//       } else {
//         yidvis_feri.style.backgroundColor = "gray";
//       } 
    
//       if (ricxvi >= fasi2) {
//         yidvis_feri_1.style.backgroundColor = "yellow";
//       } else {
//         yidvis_feri_1.style.backgroundColor = "gray";
//       }

//       if (ricxvi >= fasi3) {
//         yidvis_feri_2.style.backgroundColor = "yellow";
//       } else {
//         yidvis_feri_2.style.backgroundColor = "gray";
//       }
      
//       if (ricxvi < fasi3) {
//         // call the function again after a delay, to avoid infinite recursion
//         setTimeout(ferebi, 100);
//       }
// }


mtavari_knopka.addEventListener("click", function vibracia() {
  // Add "vibrate" class to the button
  mtavari_knopka.classList.add("vibrate");

  // Remove "vibrate" class from the button after 0.2 seconds
  setTimeout(function vibracia() {
    mtavari_knopka.classList.remove("vibrate");
  }, 200);
});

function siaxleebi() {
  if (ricxvib >= 500){
    bonusebi_gamochena();
  }

  if (ricxvi >= 200){
    u1_damateba();
  }
}

function tyemali_yidva() {
    if (ricxvi >= fasi3){
        ricxvi = ricxvi - fasi3;
        fasi3 = fasi3 + 100;
        tyemali= tyemali + 5;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi3').innerHTML = fasi3;
        tyemlis_xma.play();
    }
}

function tyemali_mushaoba() {
    ricxvi = ricxvi + tyemali;
    document.getElementById('qula').innerHTML = ricxvi;
}

function ajika_yidva() {
  if (ricxvi >= fasi4){
      ricxvi = ricxvi - fasi4;
      fasi4 = fasi4 + 300;
      ajika= ajika + 15;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi4').innerHTML = fasi4;
      ajika_xma.play();
  }
}

function ajika_mushaoba() {
  ricxvi = ricxvi + ajika;
  document.getElementById('qula').innerHTML = ricxvi;
}



function bonusebi_gamochena() {
  mtavari_knopka_shecvla.style.marginRight = "5px";
  const bonus_gamochena = document.getElementById("bonusebi");
  bonus_gamochena.style.display = "block";
  mtavari_gverdi.style.width = "1318px";
}

function u1_damateba(){
  const u1 = document.getElementById('u1');
  u1.style.display = "block";
}

function bonus1(){
  if ( ricxvib >= 600){
    momatebuli = momatebuli * 2;
    ricxvib = ricxvib - 600;
    const b1 = document.getElementById('b1');
    b1.style.display="none";
    document.getElementById('qulab').innerHTML = ricxvib;
  }
}




setInterval(siaxleebi, 1000)
setInterval(sicive_kliki, 1000)
setInterval(tyemali_mushaoba, 1000)
setInterval(ajika_mushaoba, 1000)