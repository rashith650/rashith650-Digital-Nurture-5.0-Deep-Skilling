from pages.dropdown_page import DropdownPage

def test_dropdown_selection(driver):

    base_url = "https://www.lambdatest.com/selenium-playground/"

    page = DropdownPage(driver)

    page.navigate_to(base_url + "select-dropdown-demo")

    page.select_day("Monday")