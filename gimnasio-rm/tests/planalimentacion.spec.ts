import { test, expect } from '@playwright/test';

test.describe("Sección de Rutinas y Planes Nutricionales", () => {
  test('Validar navegación y contenido de los planes', async ({ page }) => {

    // 👉 Ir a la página de rutinas
    await page.goto('http://localhost:3000/rutinas');

    // 👉 Verificar título principal
    await expect(
      page.getByRole('heading', { name: 'Planes Nutricionales' })
    ).toBeVisible();

    // 👉 Verificar texto inicial
    await expect(page.getByText(/Elegí el/i)).toBeVisible();

    // 👉 Verificar subtítulo inicial del plan
    await expect(
      page.getByRole('heading', { name: 'Para generar músculo' }).first()
    ).toBeVisible();

    // 👉 Click en botón Obtener Plan
    const botonObtener = page.getByRole('button', { name: 'Obtener Plan' }).first();
    await expect(botonObtener).toBeVisible();
    await botonObtener.click();

    // 👉 Seleccionar el MODAL (usamos el overlay típico de Tailwind)
    const modal = page.locator('.fixed.inset-0');
    await expect(modal).toBeVisible();

    // 👉 Verificar que el modal muestra el plan correcto
    await expect(
      modal.getByRole('heading', { name: 'Para generar músculo' })
    ).toBeVisible();

    await expect(modal.getByText(/Lorem/i)).toBeVisible();

    // 👉 Cerrar el modal (segundo botón vacío según tu HTML)
    const botonCerrar = modal.getByRole('button').filter({ hasText: /^$/ }).nth(0);
    await expect(botonCerrar).toBeVisible();
    await botonCerrar.click();

    // 👉 Verificar contenido de otros planes
    await expect(page.getByText(/Para adelgazar/i)).toBeVisible();
    await expect(page.getByText(/hipocaló/i)).toBeVisible();

    await expect(page.getByText(/Para ganar resistencia/i)).toBeVisible();
    await expect(page.getByText(/Dieta/i)).toBeVisible();
  });
});
