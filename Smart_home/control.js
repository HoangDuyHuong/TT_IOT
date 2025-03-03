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

const sw_tv = document.getElementById('sw_tv');

// xu ly xu kien
sw_tv.addEventListener('change', () => {
    if (sw_tv.checked) {
        img_tv.src = './img/TV_on.png';

        // update data on firebase
        database.ref("/All Devices").update({
            "TV": 1
        });

    }
    else {
        img_tv.src = './img/TV_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "TV": 0
        });
    }
});

sw_wf.addEventListener('change', () => {
    if (sw_wf.checked) {
        img_wf.src = './img/wifi_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "WiFi": 1
        });
    }
    else {
        img_wf.src = './img/wifi_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "WiFi": 0
        });
    }
});

sw_ml.addEventListener('change', () => {
    if (sw_ml.checked) {
        img_ml.src = './img/air-conditioner_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Air Conditioner": 1
        });
    }
    else {
        img_ml.src = './img/air-conditioner_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Air Conditioner": 0
        });
    }
});

sw_loa.addEventListener('change', () => {
    if (sw_loa.checked) {
        img_loa.src = './img/loa_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Speaker": 1
        });
    }
    else {
        img_loa.src = './img/loa_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Speaker": 0
        });
    }
});

sw_mg.addEventListener('change', () => {
    if (sw_mg.checked) {
        img_mg.src = './img/Wash_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Washing Machine": 1
        });
    }
    else {
        img_mg.src = './img/Wash_off.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Washing Machine": 0
        });
    }
});

sw_den.addEventListener('change', () => {
    if (sw_den.checked) {
        img_den.src = './img/light_on.png';
        // update data on firebase
        database.ref("/All Devices").update({
            "Lamp": 1
        });
    }
    else {
        img_den.src = './img/light_off.png';
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
    if(t["TV"]==1){
        img_tv.src = "./img/TV_on.png"
    }
    else {
        img_tv.src = "./img/TV_off.png"
    }
})

database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["WiFi"]==1){
        img_wf.src = "/img/wifi_on.png"
    }
    else {
        img_wf.src = "/img/wifi_off.png"
    }
})

database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["Air Conditioner"]==1){
        img_ml.src = "./img/air-conditioner_on.png"
    }
    else {
        img_ml.src = "./img/air-conditioner_off.png"
    }
})

database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["Speaker"]==1){
        img_loa.src = "./img/loa_on.png"
    }
    else {
        img_loa.src = "./img/loa_off.png"
    }
})

database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["Washing Machine"]==1){
        img_mg.src = "./img/Wash_on.png"
    }
    else {
        img_mg.src = "./img/Wash_off.png"
    }
})

database.ref("All Devices").on('value', function(snapshot){
    let t = snapshot.val();
    console.log(t);
    if(t["Lamp"]==1){
        img_den.src = "./img/light_on.png"
    }
    else {
        img_den.src = "./img/light_off.png"
    }
})

