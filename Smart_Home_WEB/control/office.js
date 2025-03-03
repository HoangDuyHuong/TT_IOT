const sw_laptop = document.getElementById("sw_laptop");
const sw_monitor = document.getElementById("sw_monitor");
const sw_light_office = document.getElementById("sw_light_office");
const sw_loa = document.getElementById("sw_loa");

const laptop = document.getElementById("laptop");
const monitor = document.getElementById("monitor");
const light_office = document.getElementById("light_office");
const loa = document.getElementById("loa");

sw_laptop.addEventListener('change', ()=>{
    if(sw_laptop.checked){
        laptop.src = '../img/laptop_on.png';
    } else{
        laptop.src = '../img/laptop_off.png';
    }
});

sw_monitor.addEventListener('change', ()=>{
    if(sw_monitor.checked){
        monitor.src = '../img/monitor_on.png';
    } else{
        monitor.src = '../img/monitor_off.png';
    }
});

sw_light_office.addEventListener('change', ()=>{
    if(sw_light_office.checked){
        light_office.src = '../img/light_on.png';
    } else{
        light_office.src = '../img/light_off.png';
    }
});

sw_loa.addEventListener('change', ()=>{
    if(sw_loa.checked){
        loa.src = '../img/loa_on.png';
    } else{
        loa.src = '../img/loa_off.png';
    }
});