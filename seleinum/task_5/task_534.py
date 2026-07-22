from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/checkbox-demo")

print(driver.find_element(By.XPATH, "//label[text()='Option 1']").text)

labels = driver.find_elements(By.XPATH, "//label[contains(text(),'Option')]")

for label in labels:
    print(label.text)

driver.quit()