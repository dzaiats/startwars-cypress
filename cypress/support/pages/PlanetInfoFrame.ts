export class PlanetInfoFrame {

  private getPlanetPopulationElement() {
    return cy.get('div:contains("Population")').find("div:nth-child(2)");
  }

  private getPlanetClimateElement() {
    return cy.get('div:contains("Climate")').find("div:nth-child(2)");
  }

  verifyPlanetPopulation(population: number) {
    cy.log(`✅ Verifying planet population is **${population}**`);
    this.getPlanetPopulationElement()
      .should("contain.text", `${population}`)
  }

  verifyPlanetClimate(climate: string) {
    cy.log(`✅ Verifying planet climate is **${climate}**`);
    this.getPlanetClimateElement()
      .should("contain.text", `${climate}`)
  }

}
