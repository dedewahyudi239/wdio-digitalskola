describe("Test Cases", () => {
  it("Test Case 1 - Succes Login", async () => {
    await browser.url("https://www.saucedemo.com/");

    const username = await browser.$("#user-name");
    const password = await browser.$("#password");
    const loginButton = await browser.$("#login-button");

    await username.setValue("standard_user");
    await password.setValue("secret_sauce");

    console.log(`Value from button ${await loginButton.getValue()}`);
    await loginButton.click();

    const elem = await $("#add-to-cart-sauce-labs-backpack");
    await elem.waitForDisplayed({ timeout: 10000 });

    //await browser.pause(1000);

    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");

    // const shoppingCart = await browser.$(
    //   '//*[id=shopping_cart_container"]/a/span'
    // );
    // await expect(shoppingCart).toHaveValue(1);
  });

  it("Test Case 2 - Add Cart", async () => {
    await browser.url("https://www.saucedemo.com/inventory.html");

    const addCart = await browser.$("#add-to-cart-sauce-labs-backpack");

    console.log(`Value from button ${await addCart.getValue()}`);
    await addCart.click();

    const elem = await $("#remove-sauce-labs-backpack");
    await elem.waitForDisplayed({ timeout: 10000 });
  });
});

//*[@id="add-to-cart-sauce-labs-backpack"]
//*[@id="item_4_title_link"]/div
//*[@id="remove-sauce-labs-backpack"]
//*[@id="shopping_cart_container"]/a/span
//*[@id="remove-sauce-labs-backpack"]
