import { test, expect } from "@playwright/test";

test.describe("Yo como usuario deseo asociarme y ver los servicios disponibles", () => {
  test("Validar secciones y enlaces de asociación", async ({ page }) => {
    await page.goto("/contactos");

    // -----------------------------------------------
    // 1️⃣ Verificar título general
    // -----------------------------------------------
    const titulo = page.getByRole("heading", { name: /servicios/i });
    await expect(titulo).toBeVisible();

    // -----------------------------------------------
    // 2️⃣ ENTRENAMIENTO PERSONALIZADO
    // -----------------------------------------------
    const hEntrenamiento = page.getByRole("heading", {
      name: /Entrenamiento Personalizado/i,
    });
    await expect(hEntrenamiento).toBeVisible();

    // Subir al contenedor (sea section, div o article)
    const entrenamiento = hEntrenamiento.locator("..");
    await expect(entrenamiento).toContainText(
      "Rutinas diseñadas para alcanzar tus objetivos con seguimiento individual."
    );

    const botonEntrenamiento = entrenamiento.getByRole("link", {
      name: /Asociarme por WhatsApp/i,
    });

    await expect(botonEntrenamiento).toBeVisible();
    expect(await botonEntrenamiento.getAttribute("href")).toContain(
      "https://wa"
    );

    // -----------------------------------------------
    // 3️⃣ CLASES GRUPALES
    // -----------------------------------------------
    const hGrupales = page.getByRole("heading", {
      name: /Clases Grupales/i,
    });
    await expect(hGrupales).toBeVisible();

    const grupales = hGrupales.locator("..");
    await expect(grupales).toContainText(
      "Zumba, CrossFit, Funcional y más. ¡Entrená en grupo y mantenete motivado!"
    );

    const botonGrupales = grupales.getByRole("link", {
      name: /Asociarme por WhatsApp/i,
    });

    await expect(botonGrupales).toBeVisible();
    expect(await botonGrupales.getAttribute("href")).toContain("https://wa");

    // -----------------------------------------------
    // 4️⃣ ASESORAMIENTO NUTRICIONAL
    // -----------------------------------------------
    const hNutricion = page.getByRole("heading", {
      name: /Asesoramiento Nutricional/i,
    });
    await expect(hNutricion).toBeVisible();

    const nutricion = hNutricion.locator("..");
    await expect(nutricion).toContainText(
      "Planes de alimentación saludables para acompañar tu entrenamiento."
    );

    const botonNutricion = nutricion.getByRole("link", {
      name: /Asociarme por WhatsApp/i,
    });

    await expect(botonNutricion).toBeVisible();
    expect(await botonNutricion.getAttribute("href")).toContain("https://wa");
  });
});
