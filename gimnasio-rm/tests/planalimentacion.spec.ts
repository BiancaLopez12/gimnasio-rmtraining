import { test, expect } from "@playwright/test";

test.describe("Sección de Rutinas y Planes Nutricionales", () => {
  test("Validar navegación y contenido de los planes", async ({ page }) => {
    await page.goto("http://localhost:3000/rutinas");

    const getModal = () =>
      page
        .locator(
          '[role="dialog"], .modal, .fixed:has(button), .fixed:has(h2), .fixed:has(h3)'
        )
        .first();

    // Función robusta para cerrar modal
    const closeModal = async (modal) => {
      const btnAria = modal.locator(
        'button[aria-label*="lose" i], button[aria-label*="errar" i]'
      );
      if (await btnAria.count()) return btnAria.click();

      const btnSVG = modal.locator("button:has(svg)");
      if (await btnSVG.count()) return btnSVG.first().click();

      return modal.locator("button").first().click();
    };

    // ========================
    // 🥗 PLAN 1
    const btnVerPlan1 = page.getByRole("button", { name: /Ver Plan/i }).first();
    await btnVerPlan1.click();

    const modal1 = getModal();
    await expect(modal1).toBeVisible();

    await closeModal(modal1);

    // ========================
    // 🏋️ PLAN 2
    const btnVerPlan2 = page.getByRole("button", { name: /Ver Plan/i }).nth(1);
    await btnVerPlan2.click();

    const modal2 = getModal();
    await expect(modal2).toBeVisible();

    await closeModal(modal2);

    // ========================
    // ⚡ PLAN 3
    const btnVerPlan3 = page.getByRole("button", { name: /Ver Plan/i }).nth(2);
    await btnVerPlan3.click();

    const modal3 = getModal();
    await expect(modal3).toBeVisible();

    await closeModal(modal3);
  });
});
