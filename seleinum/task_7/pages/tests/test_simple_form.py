from pages.simple_form_page import SimpleFormPage

def test_simple_form_submission(driver):

    base_url = "https://www.lambdatest.com/selenium-playground/"

    page = SimpleFormPage(driver)

    page.navigate_to(base_url + "simple-form-demo")

    page.enter_message("Hello Selenium")

    page.click_submit()

    assert page.get_displayed_message() == "Hello Selenium"