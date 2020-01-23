# instrukcje na stronie:
# https://cosmocode.io/how-to-connect-selenium-to-an-existing-browser-that-was-opened-manually/

# lokalizacja chrome: C:\Program Files (x86)\Google\Chrome\Application
# uruchomienie z tego katalogu przez: .\chrome.exe

# uruchomienie Chrome w trybie debugowania (konfiguracja w podkatalogu):
# .\chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\xampp\htdocs\pearson\selenium\ChromeProfile"

# webdriver.WebDriver.attachToSession(executor, session_id)  ## legacy method

# jako parametr wywołania jest oczekiwana nazwa pliku json z listą utworów do odtworzenia w serwisie i nagrania

import json
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import wave
import pyaudio
import sys
import os

import pprint  # tymczasowo do lepszego podglądu przy tworzeniu kodu


# wczytanie listy plików na podstawie parametru
if len(sys.argv) < 2:
    print("Wymagany jest parametr z nazwą pliku JSON")
    exit()
jsonSourceFile = sys.argv[1]
with open(jsonSourceFile, 'r') as f:
    sounds = json.load(f)

"""
print(type(sounds))
print(len(sounds))
pprint.pprint(sounds)
"""

# inicjacja nagrywania dźwięku

CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 2
RATE = 44100
p = pyaudio.PyAudio()

# input selection
print("Dostępne urządzenia do nagrywania dźwięku:")
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
    if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
        print("Input Device id ", i, " - ",
              p.get_device_info_by_host_api_device_index(0, i).get('name'))
inputDevice = int(
    input("Podaj numer urządzenia Przechwytywanie odtwarzania: "))
# p.terminate()

# inicjacja Selenium do pracy z już otwartą stroną (zalogowanej do serwisu)
chrome_options = Options()
chrome_options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
# Change chrome driver path accordingly
driverLocation = "C:\\xampp\\htdocs\\pearson\\selenium\\chromedriver.exe"
#        os.environ["webdriver.chrome.driver"] = driverLocation
driver = webdriver.Chrome(driverLocation, chrome_options=chrome_options)

linkSuffix = 'https://edesk.pearson.pl'
songsNo = len(sounds)
for i in range(songsNo):
    song = sounds[i]
    print("otwieram stronę z nagraniem", i+1, "/",
          songsNo, ">", linkSuffix, song['link'])
    driver.get(linkSuffix+song['link'])
    time.sleep(3)  # delay for 3 seconds (time for page loading)

    playButton = driver.find_element_by_class_name("play-pause")
    if playButton is not None:

        # uruchom nagrywanie dźwięku
        # recording settings
        p = pyaudio.PyAudio()
        stream = p.open(format=FORMAT,
                        channels=CHANNELS,
                        rate=RATE,
                        input=True,
                        frames_per_buffer=CHUNK,
                        input_device_index=inputDevice
                        )
        frames = []

        # ustal czas trwania utworu
        songTime = driver.find_element_by_class_name("duration").text
        songTimes = songTime.split(':')
        lenInSeconds = int(songTimes[0])*60 + int(songTimes[1])

        # uruchom odtwarzanie utworu na stronie
        playButton.click()
        print("Nagrywam", song['title'], "czas: ",
              songTime, "(", lenInSeconds, ")")

        # nagrywaj przez ustalony czas
        for i in range(0, int(RATE / CHUNK * lenInSeconds)):
            data = stream.read(CHUNK)
            frames.append(data)

        stream.stop_stream()
        stream.close()
        # p.terminate()

        if i == 0:  # przy pierwszym pliku tworzymy katalog jeśli go nie ma
            if not os.path.isdir(song['cd']):
                try:
                    os.mkdir(song['cd'])
                except OSError:
                    print("Nie udało się utworzyć katalogu %s !" % song['cd'])
                else:
                    print("Utworzony katalog %s" % song['cd'])
        outputFileName = song['cd']+"\\"+song['title']+".wav"
        print('Nagrywanie zakończone. Zapisuję do pliku: ' + outputFileName)
        wf = wave.open(outputFileName, 'wb')
        wf.setnchannels(CHANNELS)
        wf.setsampwidth(p.get_sample_size(FORMAT))
        wf.setframerate(RATE)
        wf.writeframes(b''.join(frames))
        wf.close()
    else:
        print("Nie znaleziony przycisk PLAY na stronie. Proces przerwany.")
        exit(1)

p.terminate()
print("GOTOWE! :)")
