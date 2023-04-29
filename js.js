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
        document.getElementById('ag_kliki_p').innerHTML = momatebuli;
        const ag_kliki = document.getElementById("ag_kliki");
        ag_kliki.style.display = "inline";
        gadzliereba.play();
    }
}

function droiti_momateba() {
  ricxvi = ricxvi + sicives_kliki;
  ricxvi = ricxvi + tyemali;
  ricxvi = ricxvi + ajika;

  if (sicives_kliki > 0 || tyemali > 0 || ajika > 0){
   vibracia();
  } 
    
    document.getElementById('qula').innerHTML = ricxvi;
}




function sicive_yidva()
{
    if (ricxvi >= fasi2) {
        ricxvi = ricxvi - fasi2;
        fasi2 = fasi2 + 10;
        sicives_kliki++;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi2').innerHTML = fasi2;
        document.getElementById('ag_sicive_p').innerHTML = sicives_kliki;
        const ag_sicive = document.getElementById("ag_sicive");
        ag_sicive.style.display = "inline";
        sicive_xma.play();
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


function vibracia() {
  const mfoto = document.getElementById("damateba");
  mfoto.classList.add("vibrate");

  setTimeout(function vibracia() {
    mfoto.classList.remove("vibrate");
  }, 200);
}


function tyemali_yidva() {
    if (ricxvi >= fasi3){
        ricxvi = ricxvi - fasi3;
        fasi3 = fasi3 + 100;
        tyemali= tyemali + 5;
        document.getElementById('qula').innerHTML = ricxvi;
        document.getElementById('fasi3').innerHTML = fasi3;
        document.getElementById('ag_tyemali_p').innerHTML = tyemali;
        const ag_tyemali = document.getElementById("ag_tyemali");
        ag_tyemali.style.display = "inline";
        tyemlis_xma.play();
    }
}



function siaxleebi() {
  if (ricxvib >= 500){
    bonusebi_gamochena();
  }

  if (ricxvi >= 200){
    u1_damateba();
  }
}

function ajika_yidva() {
  if (ricxvi >= fasi4){
      ricxvi = ricxvi - fasi4;
      fasi4 = fasi4 + 300;
      ajika= ajika + 15;
      document.getElementById('qula').innerHTML = ricxvi;
      document.getElementById('fasi4').innerHTML = fasi4;
      document.getElementById('ag_ajika_p').innerHTML = ajika;
      const ag_ajika = document.getElementById("ag_ajika");
      ag_ajika.style.display = "inline";
      ajika_xma.play();
  }
}


function bonusebi_gamochena() {
  const bonus_gamochena = document.getElementById("bonusebi");
  bonus_gamochena.style.display = "flex";
}

function bonus1(){
  if ( ricxvib >= 10){
    momatebuli = momatebuli * 2;
    ricxvib = ricxvib - 600;
    const b1 = document.getElementById('b1');
    b1.style.display = "none";
    document.getElementById('qulab').innerHTML = ricxvib;
    document.getElementById('ag_kliki_p').innerHTML = momatebuli;
  }
}


function u1_damateba(){
  const u1 = document.getElementById('u1');
  u1.style.display = "flex";
}





setInterval(siaxleebi, 1000)
setInterval(droiti_momateba, 1000)
