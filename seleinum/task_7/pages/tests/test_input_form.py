from pages.input_form_page import InputFormPage

def test_input_form_submit(driver):

    base_url = "https://www.lambdatest.com/selenium-playground/"

    page = InputFormPage(driver)

    page.navigate_to(base_url + "input-form-demo")

    page.fill_form(
        "John",
        "john@test.com",
        "9876543210",
        "Chennai"
    )

    page.submit_form()

    assert "success" in page.get_success_message().lower()