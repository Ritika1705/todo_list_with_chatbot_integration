from weather import Weather
# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import requests, json

class ActionHelloWorld(Action):

     def name(self) -> Text:
         return "action_weather"
     
     def Weather(city):
        api_key = "881ea9b7ab83f037fe4f80745ec90f04"
        base_url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key
        response = requests.get(base_url)
        x = response.json()
        y = x["main"]
        current_temperature = y["temp"]
        return y

     def run(self, dispatcher: CollectingDispatcher,
             tracker: Tracker,
             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
    
         city = tracker.latest_message['text']
         temp = int(Weather(city)['temp'])
         dispatcher.utter_template("utter_temp",tracker, temp=temp)

         return []
