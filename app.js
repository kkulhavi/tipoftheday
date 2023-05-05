const txtDay = document.querySelector('#txtDay');
const btnOk = document.querySelector('#btnOk');
const tip = document.querySelector('#tip');



btnOk.addEventListener('click',()=>{
    if(txtDay.value==='pon')
        tip.innerHTML='bio naporan vikend!!!'
})
