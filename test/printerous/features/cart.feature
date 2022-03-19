Feature: Cart Feature

  Scenario: User succesfully add product to Cart
    Given User on Printerous login page
    And User login with valid data in to the text box
    And User directed to Pinterous homepage
    And User click menu kemasan dan Label
    And User select product label stiker kemasan satuan (die cut)
    And User select spec Vinyl Matte  Bulat 10 x 10 cm
    And User select quantity 25pcs
    And User select motode design
    When User click tambah ke Keranjang
    Then User redirected to cart
