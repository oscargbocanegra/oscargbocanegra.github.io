import { expect, test, type Page } from '@playwright/test';

const primaryRoutes = [
  '/', '/services.html', '/projects.html', '/about.html', '/resume.html', '/work-with-me.html',
  '/es/', '/es/services.html', '/es/projects.html', '/es/about.html', '/es/resume.html', '/es/work-with-me.html'
];
const legacyResumeRoutes = ['/resume-old.html', '/resume2.html'];
const placeholderPattern = /lorem ipsum|\b(?:todo|tbd)\b|coming soon|replace me|\[your .+?\]/i;
const ctaPattern = /work with me|discuss a project|start a project|trabajá conmigo|conversemos|hablemos de tu proyecto/i;

function evidenceName(route: string) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-').replace('.html', '');
}

async function assertShell(page: Page, route: string, mobile: boolean) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  const response = await page.goto(route, { waitUntil: 'networkidle', timeout: 30_000 });
  expect(response, `${route} should return a response`).not.toBeNull();
  expect(response?.ok(), `${route} should load successfully`).toBeTruthy();
  await expect(page.locator('html')).toHaveAttribute('lang', /^(en|es)/);
  await expect(page.locator('main#main-content')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('header')).toHaveCount(1);
  await expect(page.locator('header nav')).toHaveCount(1);
  await expect(page.locator('footer')).toHaveCount(1);
  await expect(page.locator('footer a').first()).toBeVisible();

  const languageLinks = page.locator('a[hreflang], a.lang-switch, .language-switch a, [aria-label="Language selector"] a');
  expect(await languageLinks.count(), `${route} should expose a language selector`).toBeGreaterThan(0);
  const ctaCount = await page.locator('a, button').evaluateAll(elements => elements.filter(element =>
    /work with me|discuss a project|start a project|trabajá conmigo|conversemos|hablemos de tu proyecto/i.test(element.textContent || '')
  ).length);
  expect(ctaCount, `${route} should include a primary CTA`).toBeGreaterThan(0);

  const bodyText = await page.locator('body').innerText();
  expect(bodyText, `${route} should not contain placeholder copy`).not.toMatch(placeholderPattern);
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth
  }));
  expect(Math.max(dimensions.documentWidth, dimensions.bodyWidth), `${route} should not overflow horizontally`).toBeLessThanOrEqual(dimensions.viewport + 1);

  if (mobile) {
    const toggle = page.locator('.nav-toggle, [aria-controls][aria-expanded]').first();
    await expect(toggle, `${route} should expose a semantic mobile menu toggle`).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-controls', /.+/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const controlledId = await toggle.getAttribute('aria-controls');
    expect(controlledId).toBeTruthy();
    await expect(page.locator(`#${controlledId}`)).toBeVisible();
  }

  await page.screenshot({ path: `.tmp/qa-evidence/dev-portfolio-tobe-026/screenshots/${test.info().project.name}/${evidenceName(route)}.png`, fullPage: true });
  expect(pageErrors, `${route} should not emit page errors`).toEqual([]);
  expect(consoleErrors, `${route} should not emit console errors`).toEqual([]);
}

for (const route of primaryRoutes) {
  test(`${route} has a functional shell`, async ({ page }, testInfo) => {
    await assertShell(page, route, testInfo.project.name === 'mobile');
  });
}

for (const route of legacyResumeRoutes) {
  test(`${route} preserves the legacy resume redirect`, async ({ page }, testInfo) => {
    const response = await page.goto(route, { waitUntil: 'networkidle', timeout: 30_000 });
    expect(response, `${route} should return a response`).not.toBeNull();
    expect(response?.ok(), `${route} should resolve successfully`).toBeTruthy();
    expect(page.url(), `${route} should resolve to the current resume`).toMatch(/\/resume(?:\.html)?(?:[?#]|$)/);
    await page.screenshot({ path: `.tmp/qa-evidence/dev-portfolio-tobe-026/screenshots/${testInfo.project.name}/legacy-${evidenceName(route)}.png`, fullPage: true });
  });
}

test('English and Spanish resumes expose six filters', async ({ page }) => {
  for (const route of ['/resume.html', '/es/resume.html']) {
    const response = await page.goto(route, { waitUntil: 'networkidle', timeout: 30_000 });
    expect(response?.ok(), `${route} should load successfully`).toBeTruthy();
    const filters = page.locator('[data-filter], .resume-filter, .filter-button');
    expect(await filters.count(), `${route} should expose exactly six resume filters`).toBe(6);
  }
});