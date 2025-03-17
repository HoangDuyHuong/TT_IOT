#include <WiFi.h>
#include <HTTPClient.h>
#include <DHTesp.h> // Changed from DHT.h to DHTesp.h to match the library you're using
#include <ArduinoJson.h>
#include <Firebase_ESP_Client.h>

// WiFi Configuration
#define WIFI_SSID "HDH"
#define WIFI_PASSWORD "0001842004"

// Firebase Configuration
const char* databaseURL = "https://tt-iot-on-off-lamp-default-rtdb.firebaseio.com";
const char* FIREBASE_AUTH = "uy48EQ0HOLfrzINFFVpADzQrw2LhOQ7OJzix8c1Y";

// DHT Configuration
#define DHT_PIN 23
#define DHTTYPE DHT11
DHTesp dht; // Changed to DHTesp instead of DHT to match the library

FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

// LED Pins
const int LED_PINS[] = {2, 4, 5, 18};
const char* LED_PATHS[] = {"/TT_IOT_on_off_Lamp/Lamp_01", "/TT_IOT_on_off_Lamp/Lamp_02", "/TT_IOT_on_off_Lamp/Lamp_03", "/TT_IOT_on_off_Lamp/Lamp_04"};


void setup() {
  // Serial Communication
  Serial.begin(9600);

  // WiFi Connection
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Initialize LED pins
  for (int i = 0; i < 4; i++) {
    pinMode(LED_PINS[i], OUTPUT);
  }

  // Initialize DHT Sensor
  dht.setup(DHT_PIN, DHTesp::DHT22); // Use DHTesp setup method

  // Configure Firebase
  config.database_url = databaseURL;
  config.signer.tokens.legacy_token = FIREBASE_AUTH; // Use legacy token for authentication

  // Initialize Firebase
  Firebase.begin(&config, &auth);

  // Optional: Set the size of the network buffer (adjust as needed)
  firebaseData.setBSSLBufferSize(2048, 2048); // Increase buffer size if needed
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    // Đọc dữ liệu cảm biến
    // float humidity = dht.getHumidity();       // Sử dụng phương thức của DHTesp
    // float temperature = dht.getTemperature(); // Sử dụng phương thức của DHTesp

    float temperature = random(20,40);
    float humidity = random(40,60);

    if (!isnan(humidity) && !isnan(temperature)) {
      Serial.printf("Temperature: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);

      // Cập nhật Firebase
      if (Firebase.RTDB.setFloat(&firebaseData, "/TT_IOT_on_off_Lamp/Temp", temperature) &&
          Firebase.RTDB.setFloat(&firebaseData, "/TT_IOT_on_off_Lamp/humidity", humidity)) {
        Serial.println("Successfully updated Firebase with temperature and humidity.");
      } else {
        Serial.printf("Failed to update Firebase. Error: %s\n", firebaseData.errorReason().c_str());
      }
    } else {
      Serial.println("Failed to read from DHT sensor!");
    }

    // Kiểm tra trạng thái LED từ Firebase
    for (int i = 0; i < 4; i++) {
      if (Firebase.RTDB.getBool(&firebaseData, LED_PATHS[i])) { // Sử dụng Firebase.RTDB.getBool để lấy giá trị bool
        digitalWrite(LED_PINS[i], firebaseData.boolData() ? HIGH : LOW);
        Serial.printf("LED%d state: %d\n", i + 1, firebaseData.boolData());
      } else {
        Serial.printf("Failed to get LED%d state, Error: %s\n", i + 1, firebaseData.errorReason().c_str());
      }
    }

    // In trạng thái LED
    Serial.printf("LED States: %d, %d, %d, %d\n", digitalRead(LED_PINS[0]),
                  digitalRead(LED_PINS[1]), digitalRead(LED_PINS[2]),
                  digitalRead(LED_PINS[3]));
  } else {
    Serial.println("WiFi not connected");
  }

  delay(2000);
}

