import { addReward, loginAs, useUsersContext } from './helpers'
import { dayjs, expect, faker, goToPage, setDateField, test } from './test'

test('displays panel only when allowed', async ({ browser }) => {
    const { adminPage, researcherPage } = await useUsersContext(browser)

    await goToPage({ page: adminPage, path: '/admin' })
    // await adminPage.waitForLoadState('networkidle')
    // await adminPage.waitForURL('**/admin/banners')
    await adminPage.waitForFunction(() => document.location.pathname == '/admin/banners')

    await goToPage({ page: researcherPage, path: '/admin' })
    // await researcherPage.waitForLoadState('networkidle')
    // await researcherPage.waitForURL('**/studies/**')
    await researcherPage.waitForFunction(() => document.location.pathname === '/studies')
})


test('can add/update/delete banners', async ({ browser }) => {
    const { adminPage } = await useUsersContext(browser)

    const message = faker.commerce.productDescription()
    await goToPage({ page: adminPage, path: '/admin/banners' })
    await adminPage.click('testId=add-banner')
    await expect(adminPage.locator('[data-banner-id=new]')).toBeVisible()
    // await adminPage.isVisible('[data-banner-id]=analyses-table')
    // await adminPage.waitForSelector('[data-banner-id=new]')

    await setDateField({
        page: adminPage, fieldName: 'dates', date: [dayjs().add(1, 'day'), dayjs().add(1, 'month')],
    })

    await adminPage.fill('[name="message"]', message)
    await adminPage.click('testId=form-save-btn')

    const banner = adminPage.locator(`[data-banner-id]:not([data-banner-id=new]):has-text("${message}")`)
    const bannerId = await banner.getAttribute('data-banner-id')

    await adminPage.fill(`[data-banner-id="${bannerId}"] >> [name="message"]`, message + ' UPDATED')
    await adminPage.click('testId=form-save-btn')

    await adminPage.waitForSelector(`[data-banner-id="${bannerId}"]:has-text("UPDATED")`)

    await adminPage.click(`[data-banner-id="${bannerId}"] >> testId="delete-banner"`)
    await adminPage.waitForSelector(`[data-banner-id="${bannerId}"]`, { state: 'detached' })
})

test('can add/update/delete rewards', async ({ browser }) => {
    const { adminPage } = await useUsersContext(browser)
    const prize = faker.commerce.productName()

    await addReward({ page: adminPage, prize, points: 10 })

    const reward = adminPage.locator(`[data-reward-id]:not([data-reward-id=new]):has([value="${prize}"])`)
    const rewardId = await reward.getAttribute('data-reward-id')

    await adminPage.fill(`[data-reward-id="${rewardId}"] >> [name="prize"]`, prize + ' UPDATED')
    await adminPage.click('testId=form-save-btn')

    await adminPage.waitForSelector(`[data-reward-id="${rewardId}"] >> [value="${prize} UPDATED"]`)

    await adminPage.click(`[data-reward-id="${rewardId}"] >> testId="delete-reward"`)
    await adminPage.waitForSelector(`[data-reward-id="${rewardId}"]`, { state: 'detached' })
})
