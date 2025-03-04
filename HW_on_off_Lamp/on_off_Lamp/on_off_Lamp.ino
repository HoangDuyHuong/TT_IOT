#include <FB_Const.h>
#include <FB_Error.h>
#include <FB_Network.h>
#include <FB_Utils.h>
#include <Firebase.h>
#include <FirebaseFS.h>





#include <WiFi.h>
#include <FirebaseESP32.h>


// cung cấp thông tin wifi
#define WIFI_SSID "Chi My"
#define WIFI_PASSWORD "88888888"

// Cung cấp thông tin Firebase
#define DATABASE_HOST "https://tt-iot-on-off-lamp-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "YTylBwOKO17e22VbVNhMNvaxWF0litXm4DdYwYq0"

// khởi tạo firebase
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

// khởi tạo GPIO
int led01 = 2;
int temp = 0;

void setup() {
  pinMode(led01, OUTPUT);
  digitalWrite(led01, LOW);
  Serial.begin(115200);
  wifi.begin(WIFI_SSID, WIFI_PASSWORD);
  // wait connect
  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(.);
  }
  Serial.println("wifi connected");
  // firebase config
  config.host = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  // connect firebase
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  // send temp on firebase
  temp = random(20,40);
  if (Firebase.setInt(firebaseData, "/TT_IOT_on_off_Lamp/Temp")){
    Serial.print("Temp is send on Firebase: ");
    Serial.println(temp);

  } else {
    Serial.print("Failed to send Temp: ");
    Serial.println(firebaseData.errorReason());
  }

// control lamp from firebase
if (Firebase.getInt(firebaseData, "/TT_IOT_on_off_Lamp/Lamp_01")){
    int l1 = firebaseData.intData();
    if (l1 == 1)
    digitalWrite(led01, HIGH);
    else
    digitalWrite(led01, LOW);
    Serial.println("Failed to get led01");
    Serial.pritnln(firebaseData.errorReason());
}
  delay(1000);
}
