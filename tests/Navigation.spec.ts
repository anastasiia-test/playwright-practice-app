import { test, expect } from '@playwright/test'
import { NavigationPage } from '../page-objects/NavigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/', { waitUntil: "networkidle" })
})
test('navigate to form page', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('submit a form', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)
    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitGridForm('test@test.com', 'Welcome1', 'Option 1')
    await onFormLayoutsPage.submitInlineForm('John Smith', 'john@smith.com', false)
})


