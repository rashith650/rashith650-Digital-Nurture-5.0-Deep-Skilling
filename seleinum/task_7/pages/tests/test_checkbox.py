from pages.checkbox_page import CheckboxPage

def test_checkbox_demo(driver):

    base_url = "https://www.lambdatest.com/selenium-playground/"

    page = CheckboxPage(driver)

    page.navigate_to(base_url + "checkbox-demo")

    page.check_option(1)

    assert page.is_option_checked(1)

    page.uncheck_option(1)

    assert not page.is_option_checked(1)