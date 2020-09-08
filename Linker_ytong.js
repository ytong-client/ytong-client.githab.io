//
// обработка ссылок 
let office_ios = "https://aim29.ru/AR/workbox_1 (4).usdz"
let office_andr = "intent://arvr.google.com/scene-viewer/1.0?file=https://aim29.ru/AR/workbox_1 (4).glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://promo.ytong.ru/MobileList;end;"
let office_dt="#office_box"

if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/)) {

    document.getElementById('office_3d').href = office_ios; // включаем ios
    document.getElementById('office_3d').rel = "ar";
            }

  else if (navigator.userAgent.toLowerCase().match(/(android)/)) {
    document.getElementById('office_3d').href = office_andr; // включаем Android

  }
  
  else if (navigator.userAgent.toLowerCase().match(/(xiaomi)/)) {
    document.getElementById('office_3d').href = office_andr; // включаем Android

  }

  else {
    document.getElementById('office_3d').href = office_dt; // включаем DeskTop

  }

// иконка загрузки
let from =''
function objClick(from) {
var elem = document.getElementById(from);
elem.classList.toggle('ldrspin');
setTimeout(objClickfade, 7000,from);
}

function objClickfade(from) {
 var elem = document.getElementById(from);
 elem.classList.toggle('ldrspin');
}

