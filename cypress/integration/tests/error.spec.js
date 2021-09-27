describe('Errors', () => {    
  it('should handle a server error', () => {
    cy.intercept('https://api.jikan.moe/v3/search/anime?score=7.5-10.0&genre=5&genre_exclude=15', {
      method: 'GET',
      url: 'https://api.jikan.moe',
      status: 500,
      response: {
        message: 'Something went wrong, please try again later',
      }
    })
    
    cy.visit('http://localhost:3000')
    
    cy.get('h1').contains('Find Your Gateway Anime')
      .get('.error-msg').contains('Oh no!')
      .get('.return').contains('Return home')
  })

  it('should handle a page not found', () => {
    cy.visit('http://localhost:3000/floof')

    cy.get('h1').contains('Oops!')
      .get('.error-msg').contains('Page not found')
      .get('.return').contains('Return home')

  })

  it('should handle a bad anime request', () => {
    cy.fixture('awardWinning.json').then((animes) => {
      cy.intercept('https://api.jikan.moe/v3/search/anime?score=7.5-10.0&genre=5&genre_exclude=15', animes)
    })
    
    cy.intercept('https://api.jikan.moe/v3/anime/3508', {
      status: 400,
      type: "HttpException",
      message: "Invalid or incomplete request. Please double check the request documentation",
      error: null
    })
    
    cy.visit('http://localhost:3000')

    cy.get('.detail-btn').click()
      .get('h3').contains('Something went wrong')
  })

})
  
