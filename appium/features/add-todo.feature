@todo
Feature: Add New To-Do Item

  Scenario: User adds a new To-Do item
    Given I am on the homepage
    When I enter "Buy groceries" into the todo input field
    And I click the add todo button
    Then "Buy groceries" should be added to my todo list