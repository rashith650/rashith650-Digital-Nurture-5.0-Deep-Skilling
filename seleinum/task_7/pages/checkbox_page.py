from selenium.webdriver.common.by import By
from pages.base_page import BasePage

class CheckboxPage(BasePage):

    OPTION1 = (By.ID, "isAgeSelected")

    def check_option(self, index=1):
        checkbox = self.wait_for_element(self.OPTION1)
        if not checkbox.is_selected():
            checkbox.click()

    def uncheck_option(self, index=1):
        checkbox = self.wait_for_element(self.OPTION1)
        if checkbox.is_selected():
            checkbox.click()

    def is_option_checked(self, index=1):
        return self.wait_for_element(self.OPTION1).is_selected()