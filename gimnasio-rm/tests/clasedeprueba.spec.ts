import { test, expect } from "@playwright/test";

test.describe("Clase de prueba gratuita – Formulario", () => {
  test("Validar formulario y envío por WhatsApp", async ({ page }) => {
    // Ir a la página
    await page.goto("http://localhost:3000/contactos");

    // Relleno del formulario
    await page.getByRole("textbox", { name: "Nombre" }).fill("Bianca");
    await page.getByRole("textbox", { name: "Apellido" }).fill("Lopez");
    await page
      .getByRole("textbox", { name: "Número Telefónico" })
      .fill("1122334455");
    await page.getByRole("textbox", { name: "Disponibilidad" }).fill("Tardes");
    await page.getByRole("combobox").selectOption("Asesoramiento Nutricional");

    // Popup
    const popupPromise = page.waitForEvent("popup");
    await page
      .getByRole("link", { name: /Solicitar Clase de Prueba/i })
      .click();
    const popup = await popupPromise;

    // --- 👇 Solución al timeout: solo DOMContentLoaded (rápido)
    await popup.waitForLoadState("domcontentloaded");

    // Obtener URL
    const popupUrl = popup.url();

    // Validar que abra WhatsApp
    await expect(popupUrl).toMatch(/https?:\/\/(wa\.me|api\.whatsapp\.com)/);

    // Validar que contenga el número de destino
    await expect(popupUrl).toContain("phone=5491158800461");

    // Validar que contenga el texto del mensaje
    await expect(popupUrl).toContain("Clase+de+Prueba+Gratuita");

    // No validamos más el body porque WhatsApp no carga DOM accesible (causa timeout)
  });
});
