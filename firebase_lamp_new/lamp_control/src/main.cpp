#include <DHT.h>
#include <FirebaseESP32.h>
#include <WiFi.h>

#define FIREBASE_HOST "esp32-web-a70f1-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "lxUqhTiE8U0XIXRLGS2Lq0MrS38LN9v9UdLOhwmk"

#define WIFI_SSID "Chi My"
#define WIFI_PASSWORD "88888888"

#define DHTPIN 12
#define DHTTYPE DHT11

const int LED_PINS[] = {2, 4, 5, 18};
const char *LED_PATHS[] = {"/data/LED1", "/data/LED2", "/data/LED3",
                           "/data/LED4"};

DHT dht(DHTPIN, DHTTYPE);
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

void setup()
{
    Serial.begin(115200);
    Serial.println("Starting...");

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nWiFi connected");

    for (int i = 0; i < 4; i++)
    {
        pinMode(LED_PINS[i], OUTPUT);
    }
    dht.begin();

    config.database_url = FIREBASE_HOST;
    config.signer.tokens.legacy_token = FIREBASE_AUTH;
    Firebase.begin(&config, &auth);
    Firebase.reconnectWiFi(true);
}

void loop()
{
    float temperature = dht.readTemperature();
    float humidity = dht.readHumidity();

    for (int i = 0; i < 4; i++)
    {
        if (Firebase.getBool(firebaseData, LED_PATHS[i]))
        {
            digitalWrite(LED_PINS[i], firebaseData.boolData());
        }
        else
        {
            Serial.println("Error");
        }
    }

    Serial.printf("LED States: %d, %d, %d, %d\n", digitalRead(LED_PINS[0]),
                  digitalRead(LED_PINS[1]), digitalRead(LED_PINS[2]),
                  digitalRead(LED_PINS[3]));

    if (isnan(temperature) || isnan(humidity))
    {
        Serial.println("Failed to read from DHT sensor!");
        return;
    }

    if (Firebase.setFloat(firebaseData, "/sensorData/temperature", temperature) &&
        Firebase.setFloat(firebaseData, "/sensorData/humidity", humidity))
    {
        Serial.printf("Temp: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);
    }
    else
    {
        Serial.println("Error");
    }
}