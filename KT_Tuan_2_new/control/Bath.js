const sw_light = document.getElementById("sw_light");
const sw_shower = document.getElementById("sw_shower");
const sw_loa = document.getElementById("sw_loa");
const sw_wash = document.getElementById("sw_wash");

const light = document.getElementById("light");
const shower = document.getElementById("shower");
const loa = document.getElementById("loa");
const wash = document.getElementById("wash");

sw_light.addEventListener('change', ()=>{
    if(sw_light.checked){
        light.src = '../img/light_on.png';
    } else{
        light.src = '../img/light_off.png';
    }
});

sw_shower.addEventListener('change', ()=>{
    if(sw_shower.checked){
        shower.src = '../img/shower_on.png';
    } else{
        shower.src = '../img/shower_off.png';
    }
});

sw_loa.addEventListener('change', ()=>{
    if(sw_loa.checked){
        loa.src = '../img/loa_on.png';
    } else{
        loa.src = '../img/loa_off.png';
    }
});

sw_wash.addEventListener('change', ()=>{
    if(sw_wash.checked){
        wash.src = '../img/wash_on.png';
    } else{
        wash.src = '../img/wash_off.png';
    }
});