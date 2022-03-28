Feature: The Internet Guinea Pig Website


  Scenario Outline: As a user, I can log into the secure area (<hiptest-uid>)
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying "<message>"

    Examples:
      | username | password | message | hiptest-uid |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! | uid:ee7e0224-ba7a-450f-933c-c15e36227fd1 |
      | foobar | barfoo | Your username is invalid! | uid:e997da55-818e-45ad-b3c0-9368a866bd31 |
