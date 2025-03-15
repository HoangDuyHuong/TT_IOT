const sw_light = document.getElementById("sw_light");
const sw_induction_hob = document.getElementById("sw_induction_hob");
const sw_cooker = document.getElementById("sw_cooker");
const sw_fryer = document.getElementById("sw_fryer");

const light = document.getElementById("light");
const induction_hob = document.getElementById("induction_hob");
const cooker = document.getElementById("cooker");
const fryer = document.getElementById("fryer");

sw_light.addEventListener('change', ()=>{
    if(sw_light.checked){
        light.src = '../img/light_on.png';
    } else{
        light.src = '../img/light_off.png';
    }
});

sw_induction_hob.addEventListener('change', ()=>{
    if(sw_induction_hob.checked){
        induction_hob.src = '../img/induction_hob_on.png';
    } else{
        induction_hob.src = '../img/induction_hob_off.png';
    }
});

sw_cooker.addEventListener('change', ()=>{
    if(sw_cooker.checked){
        cooker.src = '../img/cooker_on.png';
    } else{
        cooker.src = '../img/cooker_off.png';
    }
});

sw_fryer.addEventListener('change', ()=>{
    if(sw_fryer.checked){
        fryer.src = '../img/fryer_on.png';
    } else{
        fryer.src = '../img/fryer_off.png';
    }
});