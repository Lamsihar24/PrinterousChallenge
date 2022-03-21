Feature: Cart Feature

  Scenario: User succesfully add product to Cart
    Given User on Printerous login page
    And User login with valid data into the text box
    And User directed to Pinterous homepage
    And User click menu kemasan dan Label
    And User directed to Kemasan Label page
    And User select product label stiker kemasan satuan die cut
    And User click Skip Tutorial
    And User select spec Vinyl Matte
    And User select spec Bulat
    And User select spec 10 x 10cm
    And User select quantity 25pcs
    And User select template design
    And User click URL
    And User set template URL
    And User click tambah ke Keranjang
    And User can see modal notification
    When User click Lihat Keranjang
    Then User redirected to cart
