# instrukcje na stronie:
# https://cosmocode.io/how-to-connect-selenium-to-an-existing-browser-that-was-opened-manually/

# lokalizacja chrome: C:\Program Files (x86)\Google\Chrome\Application
# uruchomienie z tego katalogu przez: .\chrome.exe

# uruchomienie Chrome w trybie debugowania (konfiguracja w podkatalogu):
# .\chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\xampp\htdocs\pearson\selenium\ChromeProfile"

# webdriver.WebDriver.attachToSession(executor, session_id)  ## legacy method

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
# Change chrome driver path accordingly
driverLocation = "C:\\xampp\\htdocs\\pearson\\selenium\\chromedriver.exe"
#        os.environ["webdriver.chrome.driver"] = driverLocation
driver = webdriver.Chrome(driverLocation, chrome_options=chrome_options)

url2 = driver.current_url
print('otwarta strona to: '+url2)


playedTime = ""

playButton = driver.find_element_by_class_name("play-pause")
if playButton is not None:
    # uruchom odtwarzanie i nagraj utwór
    playButton.click()

    # zapisz nagrany utwór do pliku
    while playedTime != "00:00":
        playedTime = driver.find_element_by_class_name("played").text
        print('odegrane ' + playedTime)
        time.sleep(1)


time.sleep(3)  # delay for 3 seconds

# testowe przełączenie się na kolejną stronę / utwór i puszczenie go
driver.current_url = 'https://edesk.pearson.pl/Audio/Index/559?p=11'
#! czy to wystarczy, żeby przejść do nowej strony ???

time.sleep(10)
url2 = driver.current_url
print('otwarta strona to: '+url2)

playButton = driver.find_element_by_class_name("play-pause")
if playButton is not None:
    # uruchom odtwarzanie i nagraj utwór
    playButton.click()
