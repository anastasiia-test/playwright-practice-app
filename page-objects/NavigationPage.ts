import { Locator, Page } from "@playwright/test";

export class NavigationPage {
    readonly page: Page
    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page:Page) {
        this.page = page
        this.formLayoutsMenuItem = this.page.getByText('Form Layouts')
        this.datePickerMenuItem = this.page.getByText('Datepicker')
        this.smartTableMenuItem = this.page.getByText('Smart Table')
        this.tooltipMenuItem = this.page.getByText('Tooltip')
        this.toastrMenuItem = this.page.getByText('Toastr')

    }

    async formLayoutsPage() {
        await this.selectGroupMenu('Forms')
        await this.formLayoutsMenuItem.click()
    }

    async datePickerPage() {
        await this.selectGroupMenu('Forms')
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        await this.selectGroupMenu('Tables & Data')
        await this.smartTableMenuItem.click()
    }

    async tooltipPage() {
        await this.selectGroupMenu('Modal & Overlays')
        await this.tooltipMenuItem.click()
    }

    async toastrPage() {
        await this.selectGroupMenu('Modal & Overlays')
        await this.toastrMenuItem.click()
    }
    
    private async selectGroupMenu(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false") {
            await groupMenuItem.click()
        }
    }
}