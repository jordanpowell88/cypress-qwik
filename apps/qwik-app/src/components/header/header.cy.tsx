import Header from './header';

describe(`header component test`, () => {
  it('should find a link', () => {
    cy.mount(() => <Header />);

    cy.contains(/docs/i).should('exist');
  });
});
