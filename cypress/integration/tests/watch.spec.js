describe('To Watch Page', () => {
  beforeEach(() => {
    cy.fixture('awardWinning.json').then((animes) => {
      cy.intercept('https://api.jikan.moe/v3/search/anime?score=7.5-10.0&genre=5&genre_exclude=15', animes)
    })

    cy.fixture('details.json').then((show) => {
      cy.intercept('https://api.jikan.moe/v3/anime/3508', show)
    })
    
    cy.visit('http://localhost:3000')
      .get('.detail-btn').click()
      .get('.save').click()

    cy.visit('http://localhost:3000/to-watch')
  })

  it('should have a title', () => {
    cy.get('h1').contains('Your Watch List')
  })
  
  it('should have a hero image', () => {
    cy.get('.hero').should('be.visible')
  })

  it('should not have a search bar', () => {
    cy.get('h2').should('not.exist')
    cy.get('.genres').should('not.exist')
  })

  it('should have a details card', () => {
    cy.get('h3').contains('Kamisama Hajimemashita')
      .get('.type').contains('TV')
      .get('.rating').contains('PG-13')
      .get('.score').contains(8.06)
  })
})