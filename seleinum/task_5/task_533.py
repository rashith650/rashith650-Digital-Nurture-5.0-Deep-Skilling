from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

print(driver.find_element(By.CSS_SELECTOR, "#user-message"))
print(driver.find_element(By.CSS_SELECTOR, "input[name='message']"))
print(driver.find_element(By.CSS_SELECTOR, "div.w-full > input"))

driver.quit()