import { expect, test } from "@playwright/test";

test("desktop deck has 38 fitted slides and working controls", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.locator(".page-count")).toHaveText("01 / 38");

  for (let slide = 1; slide <= 38; slide += 1) {
    const fit = await page.locator(".slide").evaluate((element) => ({
      width: element.clientWidth,
      scrollWidth: element.scrollWidth,
      height: element.clientHeight,
      scrollHeight: element.scrollHeight,
    }));
    expect(fit.scrollWidth, `slide ${slide} horizontal fit`).toBeLessThanOrEqual(fit.width + 1);
    expect(fit.scrollHeight, `slide ${slide} vertical fit`).toBeLessThanOrEqual(fit.height + 1);
    if (slide < 38) await page.keyboard.press("ArrowRight");
  }

  await page.keyboard.press("Home");
  await page.keyboard.press("KeyO");
  await expect(page.locator(".overlay-outline")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.keyboard.press("KeyN");
  await expect(page.locator(".overlay-notes")).toBeVisible();
});

test("all supplied images load", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.keyboard.press("End");
  await page.keyboard.press("Home");
  await page.waitForFunction(() =>
    [...document.images].every((image) => image.complete && image.naturalWidth > 0),
  );
  const failures = await page.locator(".visual-error").count();
  expect(failures).toBe(0);
});

test("mobile slides have no horizontal overflow and swipe navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.dispatchEvent(".deck-shell", "touchstart", {
    touches: [{ identifier: 0, clientX: 320, clientY: 300 }],
  });
  await page.dispatchEvent(".deck-shell", "touchend", {
    changedTouches: [{ identifier: 0, clientX: 100, clientY: 300 }],
  });
  await expect(page.locator(".page-count")).toHaveText("02 / 38");
});
