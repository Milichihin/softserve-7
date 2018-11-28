

document.querySelectorAll('.dig-oper')
  .forEach( el => el.addEventListener('click', digOperClick) )

function digOperClick(ev) {
    const display = document.querySelector('.display');
    display.value += ev.target.innerText;
}


document.querySelector('.del')
  .forEach( el => el.addEventListener('click', backSpace) );
  
function backSpace() {
    const del = document.getElementByClassName('display').reset();
}

//document.getElementById('digOperClick').reset();

$('.eq').click( () => $('.display').val( eval($('.display').val()) ) );

//$("#client")[0].reset();