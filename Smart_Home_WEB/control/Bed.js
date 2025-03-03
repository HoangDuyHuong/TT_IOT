const sw_light = document.getElementById("sw_light");
const sw_conditioner = document.getElementById("sw_conditioner");
const sw_loa = document.getElementById("sw_loa");
const sw_tv = document.getElementById("sw_tv");

const light = document.getElementById("light");
const Conditioner = document.getElementById("Conditioner");
const loa = document.getElementById("loa");
const tv = document.getElementById("tv");

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

sw_tv.addEventListener('change', ()=>{
    if(sw_tv.checked){
        tv.src = '../img/tv_on.png';
    } else{
        tv.src = '../img/tv_off.png';
    }
});