from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

print(driver.find_element(By.ID, "user-message"))
print(driver.find_element(By.NAME, "message"))
print(driver.find_element(By.CLASS_NAME, "form-control"))
print(driver.find_element(By.TAG_NAME, "input"))
print(driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div/div[2]/input"))
print(driver.find_element(By.XPATH, "//input[@id='user-message']"))

driver.quit()