import { test, expect } from '@playwright/test';

test.describe("Yo como usuario deseo asociarme y ver los servicios disponibles", () => {
  test('Validar secciones y enlaces de asociación', async ({ page }) => {
    await page.goto('/contactos'); // o la URL donde está la sección

    console.log(await page.content());

    // ✅ Verificar título general (cualquier heading que contenga “servicios”)
    const titulo = page.locator('h1, h2, h3', { hasText: /servicios/i });
    await expect(titulo.first()).toBeVisible();

    // 🏋️‍♂️ Sección 1: Entrenamiento Personalizado
    const entrenamiento = page.locator('section:has-text("Entrenamiento Personalizado")');
    await expect(entrenamiento).toBeVisible();

    // 🔽 cambio acá — agregamos .first()
    const botonEntrenamiento = entrenamiento.getByRole('link', { name: /Asociarme por WhatsApp/i }).first();
    const hrefEntrenamiento = await botonEntrenamiento.getAttribute('href');
    await expect(entrenamiento).toContainText('Rutinas diseñadas para alcanzar tus objetivos con seguimiento individual.');
    await expect(hrefEntrenamiento).toContain('https://wa');

    // 🤸‍♀️ Sección 2: Clases Grupales
    const grupales = page.locator('section:has-text("Clases Grupales")');
    await expect(grupales).toBeVisible();
    await expect(grupales).toContainText('Zumba, CrossFit, Funcional y más. ¡Entrená en grupo y mantenete motivado!');

    const botonGrupales = grupales.getByRole('link', { name: /Asociarme por WhatsApp/i }).first();
    const hrefGrupales = await botonGrupales.getAttribute('href');
    await expect(hrefGrupales).toContain('https://wa');

    // 🥗 Sección 3: Asesoramiento Nutricional
    const nutricion = page.locator('section:has-text("Asesoramiento Nutricional")');
    await expect(nutricion).toBeVisible();
    await expect(nutricion).toContainText('Planes de alimentación saludables para acompañar tu entrenamiento.');

    const botonNutricion = nutricion.getByRole('link', { name: /Asociarme por WhatsApp/i }).first();
    const hrefNutricion = await botonNutricion.getAttribute('href');
    await expect(hrefNutricion).toContain('https://wa');
  });
});
