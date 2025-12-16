import { test, expect } from "@playwright/test";

test("Flujo completo de merchandising y WhatsApp", async ({ page }) => {
  await page.goto("http://localhost:3000/merchandising");
  await expect(
    page.getByRole("heading", { name: "Gorra Team RM" })
  ).toBeVisible();
  await page.getByText("Gorra del Team RM, ajustable").click();
  await page.getByText("$7000(ARS)").click();
  await expect(
    page.getByRole("heading", { name: "Remera Team RM" })
  ).toBeVisible();
  await page.getByText("Remera del Team RM, de algodon super fresca.").click();
  await page.getByText("$12000(ARS)").click();
  await expect(page.getByRole("heading", { name: "Botella RM" })).toBeVisible();
  await page.getByText("Botella reutilizable de 750ml con diseño RM.").click();
  await page.getByText("$8500(ARS)").click();
});
