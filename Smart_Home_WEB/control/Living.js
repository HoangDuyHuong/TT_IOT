const sw_light = document.getElementById("sw_light");
const sw_camera = document.getElementById("sw_camera");
const sw_tv = document.getElementById("sw_tv");
const sw_wifi = document.getElementById("sw_wifi");

const light = document.getElementById("light");
const camera = document.getElementById("camera");
const tv = document.getElementById("tv");
const wifi = document.getElementById("wifi");

sw_light.addEventListener('change', ()=>{
    if(sw_light.checked){
        light.src = '../img/light_on.png';
    } else{
        light.src = '../img/light_off.png';
    }
});

sw_camera.addEventListener('change', ()=>{
    if(sw_camera.checked){
        camera.src = '../img/camera_on.png';
    } else{
        camera.src = '../img/camera_off.png';
    }
});

sw_tv.addEventListener('change', ()=>{
    if(sw_tv.checked){
        tv.src = '../img/TV_on.png';
    } else{
        tv.src = '../img/TV_off.png';
    }
});

sw_wifi.addEventListener('change', ()=>{
    if(sw_wifi.checked){
        wifi.src = '../img/wifi_on.png';
    } else{
        wifi.src = '../img/wifi_off.png';
    }
});