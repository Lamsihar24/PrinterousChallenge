Feature: Login Feature

  Scenario: User Successfully Login With Registered Email
    Given User on Printerous login page
    When User login with valid data into the text box
    Then User directed to Pinterous homepage
    