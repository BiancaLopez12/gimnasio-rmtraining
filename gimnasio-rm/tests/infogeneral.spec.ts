import { test, expect } from "@playwright/test";

test.describe("Yo como usuario visitante deseo visualizar la información general para saber y conocer el gimnasio ", () => {
  test("Una sección donde se visualice la información general del local, por ejemplo: Sobre Nosotros", async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/sobrenosotros');
    await expect(
      page.getByRole("heading", { name: "RM TRAINING" })
    ).toBeVisible();
    await page.getByText("Tu destino para el").click();
    await page.getByRole("button", { name: "Conocer Más" }).click();
    await page.getByRole("heading", { name: "SOMOS RM TRAINING" }).click();
    await page.getByText("SOMOS RM TRAININGLorem ipsum").click();
  });
});
