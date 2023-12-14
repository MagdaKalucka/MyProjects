class SideMenu {
 
  get women () {return cy.get('.badge').eq(0)};
  get womenDress () {return cy.contains('Dress ')};

  get men () {return cy.get('.badge').eq(1)};
  get menJeans () {return cy.contains('Jeans ')};

  get kids () {return cy.get('.badge').eq(2)};
  get kidsTopShirts () {return cy.contains('Tops & Shirts ')};

  get polo () {return cy.get('[href="/brand_products/Polo"]')};
  get madame () {return  cy.get('[href="/brand_products/Madame"]')};
  get babyhug () {return  cy.get('[href="/brand_products/Babyhug"]')};
  get biba () {return  cy.get('[href="/brand_products/Biba"]')};
}

export default SideMenu;
