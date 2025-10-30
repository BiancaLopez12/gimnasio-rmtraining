import { test, expect } from '@playwright/test';

test('La sección de Testimonios tiene contenido visible', async ({ page }) => {
  await page.goto('http://localhost:3000/sobrenosotros');

  const seccion = page.locator('section:has-text("Testimonios de nuestros alumnos")');
  await expect(seccion).toBeVisible();

  // Busca cualquier texto dentro de la sección
  const contenido = seccion.locator('text=Excelente');
  await expect(contenido).toBeVisible();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Ver más opiniones en Google →' }).click();
  const page1 = await page1Promise;
});
