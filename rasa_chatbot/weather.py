import requests, json

def Weather(city):
    api_key = "881ea9b7ab83f037fe4f80745ec90f04"
    base_url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key
    response = requests.get(base_url)
    x = response.json()
    y = x["main"]
    current_temperature = y["temp"]
    return y