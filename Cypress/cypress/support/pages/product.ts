import SideMenu from "../components/sideMenu";
import TopNavigationBar from "../components/topNavigationBar";

class ProductPage {
  sideMenu = new SideMenu;
  topNavigationBar = new TopNavigationBar;
  
  productNameText: string = 'frozen';
  badProductNameText: string = 'yellow';
  productText: string = 'Frozen Tops For Kids';

  get searchInput () {return cy.get('.container #search_product')};
  get searchButton () {return cy.get('.container #submit_search')};
  get productTextLabel () {return cy.contains('Frozen Tops For Kids')};
  get viewProduct1 () {return cy.get('.choose > .nav > li > a').first()};

  selectorProduct(productNumber: number): string {
    const selector = `.features_items .productinfo .btn[data-product-id="${productNumber}"]`;
    return selector;
  };
  get product1 () {return cy.get(this.selectorProduct(1))};
  get product4 () {return cy.get(this.selectorProduct(4))};
  get product15 () {return cy.get(this.selectorProduct(15))};
  get product3Women () {return cy.get(this.selectorProduct(3))};
  get product35Men () {return cy.get(this.selectorProduct(35))};
  get product29Kids () {return cy.get(this.selectorProduct(29))};
  get product8Polo () {return cy.get(this.selectorProduct(8))};
  get product38Madame () {return cy.get(this.selectorProduct(38))};
  get product40Biba () {return cy.get(this.selectorProduct(40))};
}
export default ProductPage;