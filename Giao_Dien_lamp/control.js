// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBexS9O2Nk79YyJExFI-I6KAOHDaInb1-4",
    authDomain: "tt-iot-on-off-lamp.firebaseapp.com",
    databaseURL: "https://tt-iot-on-off-lamp-default-rtdb.firebaseio.com",
    projectId: "tt-iot-on-off-lamp",
    storageBucket: "tt-iot-on-off-lamp.firebasestorage.app",
    messagingSenderId: "995137783619",
    appId: "1:995137783619:web:434fcb5781dfb53af951f6",
    measurementId: "G-E45CZZXVRN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();

const sw_tv = document.getElementById('sw_tv');

// xử lý sự kiện
switch_01.addEventListener('change', () => {
    if (switch_01.checked) {
        img_01.src = 'img/light_on.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_01": 1
        });
    } else {
        img_01.src = 'img/light_off.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_01": 0
        });
    }
});
switch_02.addEventListener('change', () => {
    if (switch_02.checked) {
        img_02.src = 'img/light_on.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_02": 1
        });
        
    } else {
        img_02.src = 'img/light_off.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_02": 0
        });
    }
});
switch_03.addEventListener('change', () => {
    if (switch_03.checked) {
        img_03.src = 'img/light_on.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_03": 1
        });
    } else {
        img_03.src = 'img/light_off.png';
        img_02.src = 'img/light_off.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_03": 0
        });
    }
});
switch_04.addEventListener('change', () => {
    if (switch_04.checked) {
        img_04.src = 'img/light_on.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_04": 1
        });
    } else {
        img_04.src = 'img/light_off.png';
        img_02.src = 'img/light_off.png';
        // update data on firebase
        database.ref("/TT_IOT_on_off_Lamp").update({
            "Lamp_04": 0
        });
    }
});

// auto update data from firebase
const temp = document.getElementById('temp');
database.ref("/TT_IOT_on_off_Lamp/Temp").on('value', function (snapshot) {
    let t = snapshot.val();
    temp.innerHTML = t;
    // console.log(t);
})

database.ref("/TT_IOT_on_off_Lamp").on('value', function (snapshot) {
    let t = snapshot.val();
    console.log(t);
    if (t["Lamp_01"] == 1) {
        img_01.src = "./img/light_on.png";
    } else {
        img_01.src = "./img/light_off.png";
    }
})

database.ref("/TT_IOT_on_off_Lamp").on('value', function (snapshot) {
    let t = snapshot.val();
    console.log(t);
    if (t["Lamp_02"] == 1) {
        img_02.src = "./img/light_on.png";
    } else {
        img_02.src = "./img/light_off.png";
    }
})

database.ref("/TT_IOT_on_off_Lamp").on('value', function (snapshot) {
    let t = snapshot.val();
    console.log(t);
    if (t["Lamp_03"] == 1) {
        img_03.src = "./img/light_on.png";
    } else {
        img_03.src = "./img/light_off.png";
    }
})

database.ref("/TT_IOT_on_off_Lamp").on('value', function (snapshot) {
    let t = snapshot.val();
    console.log(t);
    if (t["Lamp_04"] == 1) {
        img_04.src = "./img/light_on.png";
    } else {
        img_04.src = "./img/light_off.png";
    }
})