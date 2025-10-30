import { test, expect } from '@playwright/test';
test.describe("Yo como usuario deseo visualizar las redes sociales del gimnasio y accesos para ver datos o realizar de consultas si lo desea", () => {

test('Datos de contacto + accesos a redes', async ({ page }) => {
  await page.goto('http://localhost:3000/contactos');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '@rm.training_' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '+54 9 11 5880-' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Ver ubicación en Google Maps' }).click();
  const page3 = await page3Promise;
  await page3.goto('https://www.google.com/maps/@-34.6933865,-58.4664662,3a,75y,146.53h,86.21t/data=!3m7!1e1!3m5!1s2JWGQO4BB363Z3BOnbMEtA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D3.7900000000000063%26panoid%3D2JWGQO4BB363Z3BOnbMEtA%26yaw%3D146.53!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D');
});
});