describe('My Qima Test Demo', () => {
  it('Launch QIMA aql-site', () => {
    cy.visit('https://www.qima.com/aql-acceptable-quality-limit')
  })
})  
describe('Enter Quantity in AQL Sampling Simulator', () => {
    it('enter quantity', () => {
      var i = 0;
      for (i = 0; i < 5 ; i++){
    cy.get('input[name="aql-calculator-quantity"]')
      }   
    })
  })
describe('Select a random inspection level', () => {
    it('select inspection level', () => {
    //cy.get('select').select('S1').click()
    //cy.contains('S1').click()
    cy.get('#aql-calculator-inspection-level').click()
    })
  })
// **** Selects a random CRITICAL DEFECTS AQL **** //
describe('Select a random critical defects aql', () => {
    it('select critical defects aql', () => {
    cy.get('#"aql-calculator-critical-aql').check()
    })
  })
describe('Verify CRITICAL Sample Size value', () => {
    it('verify critical sample size', () => {
      cy.contains('Sample Size')
    })
  })
describe('Verify CRITICAL Accept Point value', () => {
    it('verify critical access point', () => {
      cy.contains('Accept Point')
    })
  })
describe('Verify CRITICAL Reject Point value', () => {
    it('verify critical reject point', () => {
      cy.contains('Reject Point')
    })
  })

// **** Selects a random MAJOR DEFECTS AQL ****  //
describe('Select a random major defects aql', () => {
    it('select major defects aql', () => {
    cy.get('#"aql-calculator-major-aql').check() 
    })
  })
describe('Verify MAJOR Sample Size value', () => {
    it('verify major sample size', () => {
      cy.contains('Sample Size')
    })
  })
describe('Verify MAJOR Accept Point value', () => {
    it('verify major access point', () => {
      cy.contains('Accept Point')
    })
  })
describe('Verify MAJOR Reject Point value', () => {
    it('verify major reject point', () => {
      cy.contains('Reject Point')
    })
  })

// **** Selects a random MINOR DEFECTS AQL ****  //
describe('Select a random MINOR defects aql', () => {
  it('select minor defects aql', () => {
  cy.get('#"aql-calculator-minor-aql').check() 
  })
})
describe('Verify MINOR Sample Size value', () => {
  it('verify minor sample size', () => {
    cy.contains('Sample Size')
  })
})
describe('Verify MINOR Accept Point value', () => {
  it('verify minor access point', () => {
    cy.contains('Accept Point')
  })
})
describe('Verify MINOR Reject Point value', () => {
  it('verify minor reject point', () => {
    cy.contains('Reject Point')
  })
})