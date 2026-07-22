from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC


def test_dropdown_selection(driver, base_url):
    driver.get(base_url + "select-dropdown-demo")

    dropdown = Select(
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "select-demo"))
        )
    )

    dropdown.select_by_visible_text("Wednesday")

    assert dropdown.first_selected_option.text == "Wednesday"