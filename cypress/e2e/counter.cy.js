describe('example counter app', () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:8080/");
    })

    it("최초에 카운터 값을 0으로 보여준다.", () => {
        // cy.get("#value").invoke("text").should("eq", "0")
        cy.get("#value").should("have.text", "0")
    })

    it("+ 버튼을 클릭시 count가 1 증가한다.", () => {
        // 기존 값을 가져오고
        // + 버튼을 클릭한 다음에
        // 변화된 값이 기존값 + 1인지 체크
        cy.get("#value").invoke("text").then(value => {
            const preValue = Number(value);
            cy.get(".increase-btn").click();
            cy.get("#value")
                .invoke("text")
                .should("eq", String(preValue + 1))
        })

    })

    it("- 버튼을 클릭시 count가 1 감소한다.", () => {
            cy.get(".increase-btn").click();
            cy.get("#value").invoke("text").then(value => {
            const preValue = Number(value);
            cy.get(".decrease-btn").click();
            cy.get("#value")
                .invoke("text")
                .should("eq", String(preValue - 1))
        })
    })

    it("+ 버튼 클릭시 count가 10이 넘는 경우 더이상 증가 못함 (Max == 10)", () => {
        for (let i = 0; i < 10; i++) {
            cy.get(".increase-btn").click();
        }
        cy.get("#value").invoke("text").should("eq", "10");
    });
})
