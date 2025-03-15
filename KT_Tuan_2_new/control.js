
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhPrWOyvG0hMt_L3g3XikVKPwhDN-urM4",
    authDomain: "control-smart-home-a1fad.firebaseapp.com",
    projectId: "control-smart-home-a1fad",
    storageBucket: "control-smart-home-a1fad.firebasestorage.app",
    messagingSenderId: "325407257841",
    appId: "1:325407257841:web:1537d9b6c1077d69f3a550",
    measurementId: "G-L2K2WF9QGD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();



const sw_ml_main = document.getElementById("sw_ml_main");
const sw_light_main = document.getElementById("sw_light_main");

const img_ml_main = document.getElementById("img_ml_main");
const img_light_main = document.getElementById("img_light_main");

sw_ml_main.addEventListener('change', ()=>{
    if(sw_ml_main.checked){
        img_ml_main.src = './img/air-conditioner_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Air Conditioner": 1
        });        
    } else{
        img_ml_main.src = './img/air-conditioner_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Air Conditioner": 0
        });
    }
});

sw_light_main.addEventListener('change', ()=>{
    if(sw_light_main.checked){
        img_light_main.src = './img/light_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Lamp": 1
        });

    } else{
        img_light_main.src = './img/light_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Lamp": 0
        });
    }
});

// database control devices
database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["Air Conditioner"]==1){
        img_ml_main.src = "./img/air-conditioner_on.png"
    }
    else {
        img_ml_main.src = "./img/air-conditioner_off.png"
    }
})

database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["Lamp"]==1){
        img_light_main.src = "./img/light_on.png"
    }
    else {
        img_light_main.src = "./img/light_off.png"
    }
})