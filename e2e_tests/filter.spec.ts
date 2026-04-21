import test, { expect } from "@playwright/test";

test('타입 필터 선택 및 초기화 테스트', async( {page} ) => {
    await page.goto('/')

    const testFilters = ['fire', 'Grass'];
    const unselectedFilters = ['Ice', 'water'];

    for (const type of testFilters)
    {
        await page.getByRole('button', {name:type}).click()
    }

    for (const type of testFilters) 
    {
        await expect(
            page.getByRole('button', { name: type }).locator('> *')
        ).not.toHaveClass(/opacity-50/)
    }

    for (const type of unselectedFilters) 
    {
        await expect(
            page.getByRole('button', { name: type }).locator('> *')
        ).toHaveClass(/opacity-50/)
    }

    await expect(page.getByRole('button', { name: '초기화' })).toBeEnabled()
    await page.getByRole('button', { name: '초기화' }).click()
    await expect(page.getByRole('button', { name: '초기화' })).toBeDisabled()
})