import { test, expect } from "@playwright/test";

test.describe("Yo como usuario visitante deseo visualizar la información general para saber y conocer el gimnasio ", () => {
  test("Una sección donde se visualice la información general del local, por ejemplo: Sobre Nosotros", async ({
    page,
  }) => {
  await page.goto('http://localhost:3000/sobrenosotros');
  await page.getByText('SOBRE NOSOTROSSomos un centro').click();
  await page.getByRole('banner').getByRole('button').click();
  await page.getByRole('button', { name: 'Sobre Nosotros' }).click();
});
});