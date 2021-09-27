describe('Home Page',() => {
  
  beforeEach(() => {
    cy.fixture('awardWinning.json').then((animes) => {
      cy.intercept('https://api.jikan.moe/v3/search/anime?score=7.5-10.0&genre=5&genre_exclude=15', animes)
    })

    cy.fixture('romance.json').then((animes) => {
      cy.intercept('https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=22&genre_exclude=15&genre_exclude=9&genre_exclude=49', animes)
    })

    cy.fixture('details.json').then((show) => {
      cy.intercept('https://api.jikan.moe/v3/anime/3508', show)
    })

    cy.visit('http://localhost:3000')
  })

  it('should have a title', () => {
    cy.get('h1').contains('Find Your Gateway Anime')
  })
  
  it('should have a hero image', () => {
    cy.get('.hero').should('be.visible')
  })

  it('should have a select genre label', () => {
    cy.get('h2').contains('Select a genre')
    cy.get('.genres').should('be.visible')
  })

  it('should start off with award winning animes displayed', () => {
    cy.get('.thumbnail-img').should('be.visible')
    cy.get('h4').contains('Genius Party')
    cy.get('.detail-btn').contains('Learn more')
  })

  it('should display a details card', () => {
    cy.get('.detail-btn').click()
    cy.get('h3').contains('Kamisama Hajimemashita')
      .get('.type').contains('TV')
      .get('.rating').contains('PG-13')
      .get('.score').contains(8.06)
  })
  
  it('should be able to select a new genre and display the new animes', () => {
    cy.get('.genres').select('romance')
    cy.get('.submit').click()
    cy.get('h4').contains('Akatsuki no Yona')
  })

  it('should have a navigation button to view Watch list', () => {
    cy.get('.home').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })

  it('should have a navigation button to view About', () => {
    cy.get('.about').click()
    cy.url().should('eq', 'http://localhost:3000/about')
  })

  it('should have an anime thumbnail with image, title, and save button', () => {
    cy.get('.watch').click()
    cy.url().should('eq', 'http://localhost:3000/to-watch')
  })
})
