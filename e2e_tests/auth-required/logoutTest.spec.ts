import { test, expect } from '@playwright/test'

test('로그아웃 테스트', async ({ page }) => {

  await page.goto('/')
  await expect(page.getByText('테스트 유저님')).toBeVisible()
  await expect(page.getByRole('button', { name: '로그아웃' })).toBeVisible()
  await page.getByRole('button', { name: '로그아웃' }).click()
  await expect(page.getByRole('button', { name: '로그인' })).toBeVisible()
  
})