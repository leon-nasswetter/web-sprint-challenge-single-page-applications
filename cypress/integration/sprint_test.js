describe("User Onboarding app", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3002");
    });

    it("Sanity test", () => {
        expect(1+1).to.equal(2);
    });


    it("can add text to textbox", () => {
        cy.get(".pizza-button").click()
        cy.get("input[name='special']").type("Make it Spicey").should("have.value", "Make it Spicey");
        cy.get("input[name='name']").type("Mike Tyson").should("have.value", "Mike Tyson");
    });

    it("can select multiple checkboxes", () => {
        cy.get(".pizza-button").click()
        cy.get("input[name='pineapple']").click().should("have.value", "on");
        cy.get("input[name='blackOlives']").click().should("have.value", "on");
    })

    it("can post", () => {
        cy.get(".pizza-button").click();
        cy.get("select").select("large");
        cy.get("input[name='sauce']").check("bbqSauce");
        cy.get("input[name='special']").type("Make it Spicey").should("have.value", "Make it Spicey");
        cy.get("input[name='name']").type("Mike Tyson").should("have.value", "Mike Tyson");
        cy.get("input[name='pineapple']").click().should("have.value", "on");
        cy.get("input[name='blackOlives']").click().should("have.value", "on");
        cy.get(".link-button").click();
    })
 
});