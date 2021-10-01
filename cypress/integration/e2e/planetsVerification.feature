Feature: Start Walk search

  Scenario Outline: look for the valid planet '<planetName>'
    When I search for the planet '<planetName>'
    Then I should see the planet with a population of <population>
    And I should see the planet with a climate of '<climate>'
    Examples:
      | planetName | population | climate   |
      | Tatooine   | 200000     | arid      |
      | Naboo      | 4500000000 | temperate |
      | Kamino     | 1000000000 | temperate |

  Scenario: look for the invalid planet
    When I search for the planet 'TestFedExTnT'
    Then I should not see any results
