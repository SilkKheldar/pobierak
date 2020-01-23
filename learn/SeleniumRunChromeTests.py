from selenium import webdriver
import os


class SeleniumRunChromeTests():
    # https://sites.google.com/a/chromium.org/chromedriver/downloads
    # https://chromedriver.storage.googleapis.com/index.html?path=79.0.3945.36/
    def test(self):
        driverLocation = "C:\\xampp\\htdocs\\pearson\\selenium\\chromedriver.exe"
        os.environ["webdriver.chrome.driver"] = driverLocation
        driver = webdriver.Chrome(driverLocation)
        driver.get("http://www.letskodeit.com")


chromeTest = SeleniumRunChromeTests()
chromeTest.test()
