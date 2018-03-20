describe('Page content', () => {
  it('shows correct content', () => {
    cy.visit('http://localhost:3000/')

    // 1. Make sure new hut form opens

    cy
      .get('div.btn__content')
      .eq(2)
      .click()
      .url()
      .should('contain', '/createhut')
    // 1. Make sure the form starts empty

    cy.get('[aria-label="Hut Name"]').type('Test Hut')

    cy.get('[aria-label="Elevation"]').type('99999')
    cy.get('[aria-label="Trailhead_Elevation"]').type('99999')
    cy.get('[aria-label="Elevation_Gain_From_Trailhead"]').type('99999')
    cy.get('[aria-label="Longitude"]').type('0')
    cy.get('[aria-label="Latitude"]').type('0')
    cy.get('[aria-label="Distance_From_Trailhead"]').type('99999')
    cy.get('[aria-label="Distance_From_Nearest_Hut"]').type('99999')
    cy.get('[aria-label="Contact_Number"]').type('970-999-9999')

    // cy
    //   .get('.job-form')
    //   .find('input')
    //   .should('have.text', '')

    // cy
    //   .get('.job-form')
    //   .find('textarea')
    //   .should('have.text', '')

    // // 1. Enter "Job Title" in the title field

    // cy
    //   .get('.job-form')
    //   .find('input')
    //   .eq(0)
    //   .type('Job Title')
    // // 1. Enter "Pay" in the pay field
    // cy
    //   .get('.job-form')
    //   .find('input')
    //   .eq(1)
    //   .type('Pay')
    // // 1. Enter "Description" in the description field
    // cy
    //   .get('.job-form')
    //   .find('textarea')
    //   .type('Description')
    // // 1. Click the submit button
    // cy
    //   .get('.job-form')
    //   .find('[type="submit"]')
    //   .click()
    // // 1. Make sure the form empties

    // cy
    //   .get('.job-form')
    //   .find('input')
    //   .should('have.text', '')

    // cy
    //   .get('.job-form')
    //   .find('textarea')
    //   .should('have.text', '')
    // // 1. Make the first job listing has "Title", "Pay",

    // cy
    //   .get('#job-listings')
    //   .find('li')
    //   .eq(0)
    //   .as('firstListing')
    // cy
    //   .get('@firstListing')
    //   .find('h4')
    //   .should('have.text', 'Job Title')

    // cy
    //   .get('@firstListing')
    //   .find('small')
    //   .eq(0)
    //   .should('have.text', 'Pay')

    // cy
    //   .get('@firstListing')
    //   .find('p')
    //   .should('have.text', 'Description')

    // cy
    //   .get('@firstListing')
    //   .find('small')
    //   .eq(1)
    //   .should('have.text', '0 dinos are interested in this job')
  })
})
