// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBexS9O2Nk79YyJExFI-I6KAOHDaInb1-4",
    authDomain: "tt-iot-on-off-lamp.firebaseapp.com",
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

// Khao báo biến JS lieenk kết với HTML
const img_01 = document.getElementById('img_01');
const btn_on_01 = document.getElementById('btn_on_01');
const btn_off_01 = document.getElementById('btn_off_01');

// auto update data from firebase
const temp = document.getElementById('temp');
database.ref("/TT_IOT_on_off_Lamp/Temp").on('value', function(snapshot) {
    let t = snapshot.val();
    temp.innerHTML = t;   
    console.log(t);        
})

database.ref("/TT_IOT_on_off_Lamp").on('value', function(snapshot) {
    let t = snapshot.val();
    console.log(t);        
    if(t["Lamp_01"]==1){
            img_01.src = "./img/light_on.png";
        } else {
            img_01.src = "./img/light_off.png";
        }

})

// auto control on firebase
database.ref("/TT_IOT_on_off_Lamp/Lamp_01").on('value', function(snapshot) {
    let t = snapshot.val();
    if(t == 1) {
        img_01.src = "./img/light_on.png";
    } else {
        img_01.src = "./img/light_off.png";
    }
})
database.ref("/TT_IOT_on_off_Lamp/Lamp_02").on('value', function(snapshot) {
    let t = snapshot.val();
    if(t == 1) {
        img_02.src = "./img/light_on.png";
    } else {
        img_02.src = "./img/light_off.png";
    }
})
database.ref("/TT_IOT_on_off_Lamp/Lamp_03").on('value', function(snapshot) {
    let t = snapshot.val();
    if(t == 1) {
        img_03.src = "./img/light_on.png";
    } else {
        img_03.src = "./img/light_off.png";
    }
})
database.ref("/TT_IOT_on_off_Lamp/Lamp_04").on('value', function(snapshot) {
    let t = snapshot.val();
    if(t == 1) {
        img_04.src = "./img/light_on.png";
    } else {
        img_04.src = "./img/light_off.png";
    }
})  

// xử lý sự kiện
//lamp_01
btn_on_01.onclick = function() {
    img_01.src ="./img/light_on.png";

    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_01": 1
    });
}
btn_off_01.onclick = function() {
    img_01.src ="./img/light_off.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
    "Lamp_01": 0
    });
}
//lamp_02
btn_on_02.onclick = function() {
    img_02.src ="./img/light_on.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_02": 1
    });
}
btn_off_02.onclick = function() {
    img_02.src ="./img/light_off.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_02": 0
        });
}
//lamp_03
btn_on_03.onclick = function() {
    img_03.src ="./img/light_on.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_03": 1
    });
}
btn_off_03.onclick = function() {
    img_03.src ="./img/light_off.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_03": 0
        });
}
//lamp_04  
btn_on_04.onclick = function() {
    img_04.src ="./img/light_on.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_04": 1
    });
}
btn_off_04.onclick = function() {
    img_04.src ="./img/light_off.png";
    // update data to firebase
    database.ref("/TT_IOT_on_off_Lamp").update({
        "Lamp_04": 0
        });
}