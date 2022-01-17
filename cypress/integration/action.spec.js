describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Cart is displayed without any item', () => {     
    cy.get('[data-test="cart-product"]').should('not.exist')
  })

  it('Cart is displayed with total amount zero', () => {     
    cy.get('[data-test="cart-total-selector"]').should('have.text', '0 €')
  })

  it('Add item to cart', () => {     
    cy.get('[data-test="list-selector"]').should('exist')
      .find('[data-test="product-0-selector"]')
      .find('button')
      .click()
  })

  it('Remove item from cart', () => {     
    cy.get('[data-test="list-selector"]').should('exist')
      .find('[data-test="product-0-selector"]')
      .find('button')
      .click()
    cy.get('[data-test="product-0-selector"]')
      .find('[data-test="remove-product-0-selector"]')
      .click()
  })
  
})