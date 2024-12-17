import { Page } from "@playwright/test";

export class NavigationPage {
    readonly page:Page

    constructor(page:Page) {
        this.page = page
    }

    async formLayoutsPage() {
        await this.selectGroupMenu('Forms')
        await this.page.getByText('Form Layouts').click()
    }

    async datePickerPage() {
        await this.selectGroupMenu('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async smartTablePage() {
        await this.selectGroupMenu('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async tooltipPage() {
        await this.selectGroupMenu('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    async toastrPage() {
        await this.selectGroupMenu('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }
    
    private async selectGroupMenu(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false") {
            await groupMenuItem.click()
        }
    }
}