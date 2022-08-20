Feature: Checkout products in E-Commerce Application and Say Thank You
    Application regression

Scenario: Checkout Products in an E-Commerce Application
Given I open an E-Commerce Application
When I add items to a Cart
And I will validate Total Prices
Then Select Country and very Thank You


Scenario: Fill the form
Given I will open the E-Commerce Application
When I will fill the form
    | Name |  Gender |
    | Jenny | Female |
Then I will validate the form
And Go to Shop Tab