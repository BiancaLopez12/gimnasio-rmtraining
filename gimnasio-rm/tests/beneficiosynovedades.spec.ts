import { test, expect } from '@playwright/test';

test.describe("Yo como usuario deseo visualizar novedades y promociones exclusivas del gimnasio", () => {
  test('Visualizar novedades y beneficios', async ({ page }) => {
    // 1️⃣ Ir a la página correspondiente
    await page.goto('/sobrenosotros'); // Cambiá la URL según corresponda

    // 2️⃣ Verificar el título principal
    const titulo = page.getByRole('heading', { name: 'Novedades y Promociones' });
    await expect(titulo).toBeVisible();
    

    // Verificar la primera promoción
    const promo1 = page.getByText('Promo 2x1 en Clases Funcionales');
    await expect(promo1).toBeVisible();

    const promo1Descripcion = page.getByText('Traé a un amigo y ambos obtienen un 50% de descuento en su primer mes.');
    await expect(promo1Descripcion).toBeVisible();

    //  Verificar la segunda promoción
    const promo2 = page.getByText('Nueva Rutina de Alta Intensidad');
    await expect(promo2).toBeVisible();

    const promo2Descripcion = page.getByText('Sumate a nuestra nueva clase HIIT para quemar calorías y mejorar tu resistencia.');
    await expect(promo2Descripcion).toBeVisible();

    //  Verificar la tercera promoción
    const promo3 = page.getByText('Descuento por Referidos');
    await expect(promo3).toBeVisible();

    const promo3Descripcion = page.getByText('Por cada persona que recomiendes, obtenés un 20% de descuento en tu próxima cuota.');
    await expect(promo3Descripcion).toBeVisible();
});
});
