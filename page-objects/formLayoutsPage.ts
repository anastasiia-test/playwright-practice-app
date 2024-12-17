import { Page } from "@playwright/test";

export class FormLayoutsPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async submitGridForm(email: string, password: string, optionText: string) {
        const gridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await gridForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await gridForm.getByRole('textbox', {name: 'Password'}).fill(password)
        await gridForm.getByRole('radio', {name: optionText}).check({force:true})
        await gridForm.getByRole('button').click()
    }

    /**
     * 
     * @param name - should be first and last name
     * @param email - valid email for the test user
     * @param rememberMe - true or false if user session to be saved
     */

    async submitInlineForm(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator('nb-card', {hasText: "Inline form"})
        await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await inlineForm.getByRole('textbox', {name: "Email"}).fill(email)
        if(rememberMe){
            await inlineForm.getByRole('checkbox').check({force:true})
            await inlineForm.getByRole('button').click()
        }
    }
}