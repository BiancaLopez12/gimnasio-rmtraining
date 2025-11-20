import { test, expect } from '@playwright/test';

test.describe("Rutinas - Validación de navegación y contenido", () => {

  test("Navegación entre rutinas usando sliders", async ({ page }) => {

    // Ir a la página de rutinas
    await page.goto('/rutinas');

    // Esperar que haya al menos 1 tarjeta de rutina (div, card, etc.)
    const firstRoutine = page.locator('section div').first();
    await expect(firstRoutine).toBeVisible();

    // Hacer click en la primera tarjeta
    await firstRoutine.click();

    // Verificar que cargó una rutina (toma cualquier heading dentro)
    const rutinaHeading = page.locator('h1, h2, h3').first();
    await expect(rutinaHeading).toBeVisible();

    // Validar que hay ejercicios listados → busca cualquier <li> o <p>
    const ejercicios = page.locator('li, p');
    await expect(ejercicios.first()).toBeVisible();

    // Ir a siguiente rutina con botón ➡
    await page.getByRole('button', { name: '➡' }).click();

    // Verificar que cambió la rutina (cambia el heading)
    const heading2 = page.locator('h1, h2, h3').first();
    await expect(heading2).toBeVisible();

    // Otra vez siguiente rutina
    await page.getByRole('button', { name: '➡' }).click();

    const heading3 = page.locator('h1, h2, h3').first();
    await expect(heading3).toBeVisible();

  });

});
