const sw_light = document.getElementById("sw_light");
const sw_conditioner = document.getElementById("sw_conditioner");
const sw_loa = document.getElementById("sw_loa");
const sw_refrigerator = document.getElementById("sw_refrigerator");

const light = document.getElementById("light");
const Conditioner = document.getElementById("Conditioner");
const loa = document.getElementById("loa");
const refrigerator = document.getElementById("refrigerator");

sw_light.addEventListener('change', ()=>{
    if(sw_light.checked){
        light.src = '../img/light_on.png';
    } else{
        light.src = '../img/light_off.png';
    }
});

sw_conditioner.addEventListener('change', ()=>{
    if(sw_conditioner.checked){
        Conditioner.src = '../img/air-conditioner_on.png';
    } else{
        Conditioner.src = '../img/air-conditioner_off.png';
    }
});

sw_loa.addEventListener('change', ()=>{
    if(sw_loa.checked){
        loa.src = '../img/loa_on.png';
    } else{
        loa.src = '../img/loa_off.png';
    }
});

sw_refrigerator.addEventListener('change', ()=>{
    if(sw_refrigerator.checked){
        refrigerator.src = '../img/refrigerator_on.png';
    } else{
        refrigerator.src = '../img/refrigerator_off.png';
    }
});