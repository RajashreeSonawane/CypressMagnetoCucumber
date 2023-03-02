Feature: Magneto Software Testing Application
    Scenario: choose magneto product,filling customer data and verify order summary.
        Given user navigate to automation website
        When choose magneto product
        When select magneto product
        When filling customer data
            | email          | firstname | lastname | company     | street_address | city | postal_code | phone     |
            | Raj@123        | Rajashree | sonawane | Excellarate | pune           | pune | 826383-72   | 972462882 |
            | Adhi@gmail.com | Adhiraj   | jadhav   | IBM         | mumbai         | pune | 862826383   | 93865822  |
        Then verify order summary
