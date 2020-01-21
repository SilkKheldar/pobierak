from selenium import webdriver


class SeleniumRunFirefoxTests():

    def testMethod(self):
        driver = webdriver.Firefox(
            executable_path="..\\selenium\\geckodriver.exe")
        driver.get("http://www.letskodeit.com")


ff = SeleniumRunFirefoxTests()
ff.testMethod()
