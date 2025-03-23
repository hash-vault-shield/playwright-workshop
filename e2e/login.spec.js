import test, { expect } from "@playwright/test";

let emailInput;
let passwordInput;
let button;

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
  emailInput = page.getByTestId("email-input");
  passwordInput = page.getByTestId("password-input");
  button = page.getByTestId("login-button");
});

test("successful login", async ({ page }) => {
  await emailInput.fill("test@example.com");
  await passwordInput.fill("password");
  await button.click();

  const resultElement = page.getByTestId("login-message");

  expect(await resultElement.textContent()).toEqual("Успешный вход !");
});

test("wrong email", async ({ page }) => {
  await emailInput.fill("tesst@example.com");

  await passwordInput.fill("password");

  await button.click();

  const resultElement = page.getByTestId("login-message");

  expect(await resultElement.textContent()).toEqual("Неверные данные!");
});

test("wrong password", async ({ page }) => {
  await emailInput.fill("test@example.com");

  await passwordInput.fill("passsword");

  await button.click();

  const resultElement = page.getByTestId("login-message");

  expect(await resultElement.textContent()).toEqual("Неверные данные!");
});
