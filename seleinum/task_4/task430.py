import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/")

driver.execute_script('window.open("https://www.google.com");')

driver.switch_to.window(driver.window_handles[0])

driver.save_screenshot("playground_screenshot.png")

print(os.path.exists("playground_screenshot.png"))

driver.quit()