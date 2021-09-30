import {SearchPage} from "../../support/pages/SearchPage";
import {Then, When} from "cypress-cucumber-preprocessor/steps";

const searchPage: SearchPage = new SearchPage()

When("I search for the planet {string}", function (planetName: string) {
  searchPage.searchForThePlanet(planetName);
});

Then("I should see the planet with a population of {int}", function (population: number) {
  searchPage.getPlanetInfoLayout().verifyPlanetPopulation(population);
});

Then("I should see the planet with a climate of {string}", function (climate: string) {
  searchPage.getPlanetInfoLayout().verifyPlanetClimate(climate);
});
