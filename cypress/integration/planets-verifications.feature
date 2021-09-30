Feature: Start Walk search

  Scenario Outline:
    When I search for the planet '<planetName>'
    Then I should see the planet with a population of <population>
    And I should see the planet with a climate of '<climate>'
    Examples:
      | planetName | population | climate |
      | Tatooine   | 200000     | arid    |
