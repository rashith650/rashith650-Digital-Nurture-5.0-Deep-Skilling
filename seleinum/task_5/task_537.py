import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/bootstrap-alert-messages-demo")

start = time.time()

driver.find_element(By.ID, "autoclosable-btn-success").click()
time.sleep(3)
print(driver.find_element(By.CSS_SELECTOR, ".alert-success").text)

print("Sleep Time:", time.time() - start)

driver.refresh()

start = time.time()

driver.find_element(By.ID, "autoclosable-btn-success").click()

alert = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success"))
)

print(alert.text)

print("Explicit Wait Time:", time.time() - start)

driver.quit()