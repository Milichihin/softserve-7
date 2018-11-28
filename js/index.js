/*const link = document.querySelector('a');
console.log(link);
console.dir(link);
link.textContent = '*Mozilla Developer Network*';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');

for (let i = 0; i < 4; i++) {
    const para = document.createElement('p');
    para.textContent = i + 1 + ': We hope you enjoyed the ride.';
    sect.appendChild(para);
    if (i % 2 === 0) {
        para.classList.add('highlight');
    }
}

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara);
//sect.removeChild(linkPara);

linkPara.parentNode.removeChild(linkPara);

// Google Maps
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        const options = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true
        }
        const map = new google.maps.Map(document.getElementById("map_canvas"), options);
    });
} else {
    const para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}

// window.addEventListener('resize', resizeMap);
// window.addEventListener('load', resizeMap);

// function resizeMap() {
//   const WIDTH = window.innerWidth;
//   const HEIGHT = window.innerHeight;
//   const div = document.getElementById('map_canvas');
//   div.style.width = WIDTH + 'px';
//   div.style.height = HEIGHT + 'px';
//   console.log('resizeMap');
// }

setInterval( updateClock, 1000);
function updateClock() {
    const clock = document.getElementById('clock');
    clock.innerText = (new Date()).toLocaleTimeString();
}    

$('button').click( () => {
    $('img').toggle(200);
});


document.querySelectorAll('.dig-oper')
  .forEach( el => el.addEventListener('click', digOperClick) )

function digOperClick(ev) {
    const display = document.querySelector('.display');
    display.value += ev.target.innerText;
}

$('.eq').click( () => $('.display').val( eval($('.display').val()) ) );

*/


const link = document.querySelector('a');      //создаем переменную "link" и присваиваем ей элемент <a>
link.textContent = 'Mozila Developer Network'; //метод textContent меняет текст для переменной (нашем случае это текстовая часть тега <a>)
link.href = 'https://developer.mozilla.org';   //метод href меняет URL ссылочного элемента <а>

const sect = document.querySelector('section');     //создаем переменную "sect" и присваиваем ей раздел <section>. 
// Эта переменная слудит родителем для старых и новых элементов 
const para = document.createElement('p');          //создаем переменную "para" и создаем для неё новый параграф <p>. Пока он записывается только в памяти JS как глобальная переменная
para.textContent = 'We hope you enjoyed the ride.'; //метод textContent меняет/создает текст для переменной (нашем случае это текст для только что созданного параграфа)
sect.appendChild(para);                             // записывает созданную переменную 'para' (новый параграф) в DOM внутрь элемента 'sect' (в раздел section)
// запись новой переменной/элемента в appendChild делается без кавычек!
// запись новой переменной/элемента производится в конец секции/раздела

//-------------------добавление текст к сужествующему---------------------

// для дополнительного текста создаем переменную и текстовый узел:
const text = document.createTextNode(' — the premier source for web development knowledge.');
const smthNewText = document.querySelector('p');   // создали новую переменную smthNewText, привязав её к параграфу <p> (JS находит первый параграф)
smthNewText.appendChild(text);    // записывает созданную переменную 'smthNewText' (дополнительный текст) в DOM после основного текста параграфа

//-------------------перемещение элемента внутри секции-------------------

// для начала присвоим первый параграф новой переменной, чтобы показать как его можно переместить в конец раздела/секции
const firstPara = document.querySelector('p');   // это наш первый параграф
sect.appendChild(firstPara);                     // перемещаем первый параграф в конец секции sect методом .appendChild

//-------------------клонирование элемента---------------------------------

// клонируем firstPara, присвоив его новому элементу clonePara:
const clonePara = firstPara.cloneNode(true);
// вставляем.
firstPara.parentNode.insertBefore(clonePara, firstPara.nextSibling);

//-------------------удаление элемента---------------------------------

// sect.removeChild(firstPara);   // удаление переменной/элемента обязательно с указанием впереди родительского элемента


smthNewText.parentNode.removeChild(smthNewText); // удаление узла, основанного только на ссылке на себя, или когда мы не знаем ролительского жлемента

/*

$('p').click( () => {
    $('img').toggle(1000);
});

*/

document.querySelectorAll('.dig-oper')
  .forEach( el => el.addEventListener('click', digOperClick) )

function digOperClick(ev) {
    const display = document.querySelector('.display');
    display.value += ev.target.innerText;
}

$('.eq').click( () => $('.display').val( eval($('.display').val()) ) );