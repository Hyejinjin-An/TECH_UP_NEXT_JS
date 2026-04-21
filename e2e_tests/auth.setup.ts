import { test as setup, expect } from '@playwright/test'
import { EncryptJWT } from 'jose'
import { hkdf } from '@panva/hkdf'
import path from 'path'

// NextAuth v4가 내부적으로 쓰는 키 파생 방식 그대로 사용
async function makeNextAuthCookie(secret: string, payload: object) {
  const key = await hkdf(
    'sha256',
    secret,
    '',
    'NextAuth.js Generated Encryption Key',
    32
  )
  return new EncryptJWT(payload as Record<string, unknown>)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .encrypt(key)
}

export const authFile = path.join(__dirname, '../playwright/.auth/user.json')

setup('세션 쿠키 주입', async ({ page }) => {
  const secret = process.env.NEXTAUTH_SECRET!

  // token.id = supabase users 테이블의 oauth_id 값
  const oauthId = process.env.TEST_OAUTH_ID!

  const token = await makeNextAuthCookie(secret, {
    id: oauthId,
    name: '테스트 유저',
    email: 'test@example.com',
  })

  // 빈 페이지에서 쿠키 설정 (도메인이 있어야 하므로 먼저 goto)
  await page.goto('/')
  await page.context().addCookies([
    {
      name: 'next-auth.session-token',
      value: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
    },
  ])

  // 세션이 실제로 인식되는지 확인
  await page.goto('/api/auth/session')
  const body = await page.textContent('body')
  expect(body).toContain(oauthId)

  // 세션 상태 저장
  await page.context().storageState({ path: authFile })
})
