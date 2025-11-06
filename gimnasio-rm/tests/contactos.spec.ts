import { test, expect } from '@playwright/test';

test.describe("Yo como usuario deseo visualizar las redes sociales del gimnasio y accesos para ver datos o realizar consultas si lo deseo", () => {

  test('Datos de contacto + accesos a redes', async ({ page }) => {
    // 1️⃣ Ir a la página de contacto
    await page.goto('http://localhost:3000/contactos');

    // 2️⃣ Verificar que el título principal esté visible
    const titulo = page.getByRole('heading', { name: 'CONTACTOS' });
    await expect(titulo).toBeVisible();

    const promo1 = page.getByText('Conectate con nosotros y entrená con energía 💪');
    await expect(promo1).toBeVisible();

    // 3️⃣ Verificar que los enlaces de redes sociales estén presentes
    const instagram = page.getByRole('link', { name: '@rm.training_' });
    await expect(instagram).toBeVisible();

    const whatsapp = page.getByRole('link', { name: '+54 9 11 5880-' });
    await expect(whatsapp).toBeVisible();

    const ubicacion = page.getByRole('link', { name: 'Ver ubicación en Google Maps' });
    await expect(ubicacion).toBeVisible();

    // 4️⃣ Verificar que los enlaces abren nuevas pestañas correctamente

    // Instagram
    const page1Promise = page.waitForEvent('popup');
    await instagram.click();
    const page1 = await page1Promise;
    await expect(page1).not.toBeNull();
    await page1.close();

    // WhatsApp
    const page2Promise = page.waitForEvent('popup');
    await whatsapp.click();
    const page2 = await page2Promise;
    await expect(page2).not.toBeNull();
    await page2.close();

    // Google Maps
    const page3Promise = page.waitForEvent('popup');
    await ubicacion.click();
    const page3 = await page3Promise;
    await expect(page3).not.toBeNull();

    // 5️⃣ Validar que el enlace de Maps dirige al dominio correcto
    await expect(page3).toHaveURL(/google\.com\/maps/);

    // Cerrar pestaña de Maps
    await page3.close();
  });
});
