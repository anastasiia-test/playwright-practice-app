import { test, expect } from '@playwright/test'
import { NavigationPage } from '../page-objects/NavigationPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/', { waitUntil: "networkidle" })
})

test('navigate to a page', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})