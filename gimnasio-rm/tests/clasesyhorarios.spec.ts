import { test, expect } from '@playwright/test';
test.describe("Yo como usuario interesado deseo visualizar horarios para poder concretar una clase y asistir ", () => {
    test('Una sección donde visualice horarios de atención para asistir o concretar una clase', async ({ page }) => {
        await page.goto('http://localhost:3000/horarios');
        await expect(page.getByRole('heading', { name: 'MAQUINAS' }).first()).toBeVisible();
        await expect(page.getByRole('heading', { name: 'FUNCIONAL' }).first()).toBeVisible();
      });
})

